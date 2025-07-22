export interface PaymentConfig {
  service: 'legal-notice' | 'consultation' | 'document-drafting' | 'corporate-retainer';
  amount: number;
  currency: 'INR';
  description: string;
}

export interface RazorpayPaymentRequest {
  amount: number;
  currency: string;
  receipt: string;
  notes: {
    leadId: string;
    service: string;
    customerName: string;
  };
}

export interface PaymentVerificationResponse {
  success: boolean;
  paymentId?: string;
  leadId?: string;
  error?: string;
  message?: string;
}

// Payment configuration for each service
export const PAYMENT_CONFIG: Record<string, PaymentConfig> = {
  'legal-notice': {
    service: 'legal-notice',
    amount: 99900, // ₹999 in paise (Razorpay expects amount in paise)
    currency: 'INR',
    description: 'Legal Notice Service - Advance Payment'
  },
  'consultation': {
    service: 'consultation',
    amount: 149900, // ₹1,499 in paise
    currency: 'INR',
    description: 'Legal Consultation Service - Advance Payment'
  },
  'document-drafting': {
    service: 'document-drafting',
    amount: 249900, // ₹2,499 in paise
    currency: 'INR',
    description: 'Document Drafting Service - Advance Payment'
  },
  'corporate-retainer': {
    service: 'corporate-retainer',
    amount: 999900, // ₹9,999 in paise
    currency: 'INR',
    description: 'Corporate Retainer Service - Advance Payment'
  }
};

// Helper function to get payment config for a service
export function getPaymentConfig(service: string): PaymentConfig | null {
  return PAYMENT_CONFIG[service] || null;
}

// Helper function to format amount for display (paise to rupees)
export function formatAmount(amountInPaise: number): string {
  const amountInRupees = amountInPaise / 100;
  return `₹${amountInRupees.toLocaleString('en-IN')}`;
}

// Helper function to generate unique receipt ID
export function generateReceiptId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `receipt_${timestamp}_${random}`;
}

// Helper function to create Razorpay payment request
export function createPaymentRequest(
  service: string,
  leadId: string,
  customerName: string
): RazorpayPaymentRequest | null {
  const config = getPaymentConfig(service);
  if (!config) return null;

  return {
    amount: config.amount,
    currency: config.currency,
    receipt: generateReceiptId(),
    notes: {
      leadId,
      service,
      customerName
    }
  };
} 