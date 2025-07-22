import { RazorpayPaymentRequest, PaymentVerificationResponse } from '@/lib/payment-config';

declare global {
  interface Window {
    Razorpay: {
      new(options: PaymentOptions): {
        open(): void;
      };
    };
  }
}

export interface PaymentOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  receipt: string;
  notes: Record<string, string>;
  handler: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void;
  prefill: {
    name: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

export class PaymentService {
  private static readonly PAYMENT_VERIFY_URL = '/api/payment/verify';

  /**
   * Load Razorpay script dynamically
   */
  static loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Razorpay script'));
      document.head.appendChild(script);
    });
  }

  /**
   * Initialize Razorpay payment
   */
  static async initializePayment(
    paymentRequest: RazorpayPaymentRequest,
    customerName: string,
    customerPhone: string,
    onSuccess: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void,
    onError: (error: string) => void
  ): Promise<void> {
    try {
      // Load Razorpay script
      await this.loadRazorpayScript();

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      if (!keyId) {
        throw new Error('Razorpay key not configured');
      }

      const options: PaymentOptions = {
        key: keyId,
        amount: paymentRequest.amount,
        currency: paymentRequest.currency,
        name: 'Vakil Tech',
        description: 'Legal Services Payment',
        receipt: paymentRequest.receipt,
        notes: paymentRequest.notes,
        handler: async (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => {
          try {
            // Verify payment on server
            const verificationResult = await this.verifyPayment(response);
            if (verificationResult.success) {
              onSuccess(response);
            } else {
              onError(verificationResult.error || 'Payment verification failed');
            }
          } catch {
            onError('Payment verification failed');
          }
        },
        prefill: {
          name: customerName,
          contact: customerPhone,
        },
        theme: {
          color: '#2563eb', // Blue color matching the app theme
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment initialization error:', error);
      onError(error instanceof Error ? error.message : 'Payment initialization failed');
    }
  }

  /**
   * Verify payment with server
   */
  static async verifyPayment(paymentResponse: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }): Promise<PaymentVerificationResponse> {
    try {
      const response = await fetch(this.PAYMENT_VERIFY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId: paymentResponse.razorpay_payment_id,
          orderId: paymentResponse.razorpay_order_id,
          signature: paymentResponse.razorpay_signature,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result: PaymentVerificationResponse = await response.json();
      return result;

    } catch (error) {
      console.error('Payment verification error:', error);
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return {
          success: false,
          error: 'Network error',
          message: 'Please check your internet connection and try again.'
        };
      }

      if (error instanceof Error) {
        return {
          success: false,
          error: 'Verification failed',
          message: error.message
        };
      }

      return {
        success: false,
        error: 'Unknown error',
        message: 'Payment verification failed. Please contact support.'
      };
    }
  }

  /**
   * Retry payment verification with exponential backoff
   */
  static async verifyPaymentWithRetry(
    paymentResponse: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string },
    maxRetries: number = 3
  ): Promise<PaymentVerificationResponse> {
    let lastError: PaymentVerificationResponse | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const result = await this.verifyPayment(paymentResponse);
      
      if (result.success) {
        return result;
      }

      lastError = result;

      // Don't retry on validation errors
      if (result.error === 'Validation failed') {
        break;
      }

      // Wait before retrying (exponential backoff)
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    return lastError || {
      success: false,
      error: 'Max retries exceeded',
      message: 'Payment verification failed after multiple attempts.'
    };
  }
}

// Export convenience functions
export const initializePayment = PaymentService.initializePayment;
export const verifyPayment = PaymentService.verifyPayment;
export const verifyPaymentWithRetry = PaymentService.verifyPaymentWithRetry; 