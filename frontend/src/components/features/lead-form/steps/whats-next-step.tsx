import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, PartyPopper, XCircle, AlertCircle } from 'lucide-react';
import { LeadFormData } from '@/types/lead-form';
import { getPaymentConfig, formatAmount } from '@/lib/payment-config';
import { useAnalytics } from '@/hooks/use-analytics';
import { useEffect } from 'react';
import { useFormContext } from '@/contexts/form-context';

interface WhatsNextStepProps {
  formData: Partial<LeadFormData>;
  leadId?: string;
  submissionSuccess?: boolean;
}

export const WhatsNextStep = ({ 
  formData, 
  leadId
}: WhatsNextStepProps) => {
  const { logEvent } = useAnalytics();
  const { paymentStatus } = useFormContext();

  useEffect(() => {
    if (formData && (formData.submissionSuccess || formData.paymentSuccess)) {
      logEvent('lead_form_success', {
        lead_id: leadId,
        payment_success: !!formData.paymentSuccess,
        payment_status: paymentStatus,
      });
    }
  }, [formData, leadId, logEvent, paymentStatus]);
  
  // Get payment amount for the service
  const getPaymentAmount = () => {
    const config = getPaymentConfig(formData.service || 'consultation');
    return config ? formatAmount(config.amount) : '₹400';
  };

  // Render different content based on payment status
  const renderPaymentStatusContent = () => {
    switch (paymentStatus) {
      case 'success':
        return (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10] }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="mb-4"
            >
              <CheckCircle2 className="w-14 h-14 text-green-500" />
            </motion.div>
            <Card className="w-full shadow-lg border-green-200">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-lg flex items-center justify-center gap-2 text-green-700">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Payment Successful!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="text-base font-medium">Thank you, {formData.name}!</p>
                <p className="text-sm text-muted-foreground">
                  Your payment of <span className="font-semibold text-green-600">{getPaymentAmount()}</span> has been processed successfully!<br />
                  <strong>Ticket ID:</strong> {formData.customId || leadId}<br />
                  <strong>Payment ID:</strong> {formData.paymentId}<br />
                  <br />
                  🎉 You now have <strong>priority support</strong>!<br />
                  One of our legal experts will contact you within <strong>2-4 hours</strong>.
                </p>
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-700">
                    <strong>What happens next?</strong><br />
                    1. You&apos;ll receive a confirmation SMS/WhatsApp<br />
                    2. Our legal team will review your case<br />
                    3. A dedicated lawyer will contact you within 2-4 hours<br />
                    4. Your case will be prioritized for faster resolution
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        );

      case 'failed':
        return (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="mb-4"
            >
              <XCircle className="w-14 h-14 text-red-500" />
            </motion.div>
            <Card className="w-full shadow-lg border-red-200">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-lg flex items-center justify-center gap-2 text-red-700">
                  <XCircle className="w-6 h-6 text-red-500" />
                  Payment Failed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="text-base font-medium">Don&apos;t worry, {formData.name}!</p>
                <p className="text-sm text-muted-foreground">
                  Your ticket has been submitted successfully! (ID: {formData.customId || leadId})<br />
                  However, the payment was not completed.<br />
                  <br />
                  You can still get priority support by trying the payment again.
                </p>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-700">
                    <strong>Why pay the advance?</strong><br />
                    • Get faster response times (2-4 hours vs 24-48 hours)<br />
                    • Your case gets bumped to the top<br />
                    • Dedicated legal expert assigned immediately<br />
                    • Better outcomes through early engagement
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        );

      case 'pending':
        return (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="mb-4"
            >
              <AlertCircle className="w-14 h-14 text-blue-500" />
            </motion.div>
            <Card className="w-full shadow-lg border-blue-200">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-lg flex items-center justify-center gap-2 text-blue-700">
                  <AlertCircle className="w-6 h-6 text-blue-500" />
                  Processing Payment...
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="text-base font-medium">Please wait, {formData.name}!</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;re processing your payment of <span className="font-semibold text-blue-600">{getPaymentAmount()}</span>.<br />
                  This may take a few moments. Please don&apos;t close this window.
                </p>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-700">
                    <strong>Processing your payment...</strong><br />
                    • Verifying payment details<br />
                    • Securing your priority status<br />
                    • Setting up your dedicated support
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        );

      default:
        // Default success state (no payment attempted)
        return (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10] }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="mb-4"
            >
              <PartyPopper className="w-14 h-14 text-green-500" />
            </motion.div>
            <Card className="w-full shadow-lg">
              <CardHeader className="pb-2 text-center">
                <CardTitle className="text-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Ticket Submitted!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-center">
                <p className="text-base font-medium">Thank you, {formData.name}!</p>
                <p className="text-sm text-muted-foreground">
                  Your request has been successfully submitted! (ID: {formData.customId || leadId})<br />
                  One of our associates will reach out to you shortly.<br />
                  <br />
                  <span className="font-semibold text-primary">💡 Pro Tip:</span> Pay a <span className="font-semibold text-primary">{getPaymentAmount()} advance</span> now to get priority support and faster response times!
                </p>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-700">
                    <strong>Priority Support Benefits:</strong><br />
                    • Faster response times (2-4 hours vs 24-48 hours)<br />
                    • Your case gets bumped to the top<br />
                    • Dedicated legal expert assigned immediately<br />
                    • Better outcomes through early engagement
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] max-w-md mx-auto p-2 sm:p-4"
    >
      {renderPaymentStatusContent()}
    </motion.div>
  );
}; 