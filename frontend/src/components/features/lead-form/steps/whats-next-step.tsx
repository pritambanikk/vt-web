import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, PartyPopper } from 'lucide-react';
import { LeadFormData } from '@/types/lead-form';
import { getPaymentConfig, formatAmount } from '@/lib/payment-config';
import { useAnalytics } from '@/hooks/use-analytics';
import { useEffect } from 'react';

interface WhatsNextStepProps {
  formData: Partial<LeadFormData>;
  leadId?: string;
  submissionSuccess?: boolean;
}

export const WhatsNextStep = ({ 
  formData, 
  leadId, 
  submissionSuccess
}: WhatsNextStepProps) => {
  const { logEvent } = useAnalytics();

  useEffect(() => {
    if (formData && (formData.submissionSuccess || formData.paymentSuccess)) {
      logEvent('lead_form_success', {
        lead_id: leadId,
        payment_success: !!formData.paymentSuccess,
      });
    }
  }, [formData, leadId, logEvent]);
  
  // Get payment amount for the service
  const getPaymentAmount = () => {
    const config = getPaymentConfig(formData.service || 'consultation');
    return config ? formatAmount(config.amount) : '₹400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] max-w-md mx-auto p-2 sm:p-4"
    >
      {/* Success Animation */}
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
          {formData.paymentSuccess ? (
            <p className="text-sm text-muted-foreground">
              Your request has been successfully submitted and payment has been received! (ID: {formData.customId || leadId})<br />
              Payment ID: {formData.paymentId}<br />
              One of our associates will reach out to you shortly.
            </p>
          ) : submissionSuccess ? (
            <p className="text-sm text-muted-foreground">
              Your request has been successfully submitted! (ID: {formData.customId || leadId})<br />
              One of our associates will reach out to you shortly.<br />
              <span className="font-semibold text-primary">💡 Pro Tip:</span> Pay a <span className="font-semibold text-primary">{getPaymentAmount()} advance</span> now to get priority support and faster response times!
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              One of our associates will reach out to you shortly.<br />
              <span className="font-semibold text-primary">💡 Pro Tip:</span> Pay a <span className="font-semibold text-primary">{getPaymentAmount()} advance</span> now to get priority support and faster response times!
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}; 