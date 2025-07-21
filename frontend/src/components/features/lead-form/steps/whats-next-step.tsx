import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, PartyPopper } from 'lucide-react';
import { LeadFormData } from '@/types/lead-form';
import { useFormContext } from '@/contexts/form-context';

interface WhatsNextStepProps {
  formData: Partial<LeadFormData>;
  onComplete: (data: LeadFormData) => void;
  leadId?: string;
  submissionSuccess?: boolean;
}

export const WhatsNextStep = ({ formData, onComplete, leadId, submissionSuccess }: WhatsNextStepProps) => {
  const { closeForm } = useFormContext();

  // Handler for Pay Now CTA
  const handlePayNow = () => {
    // TODO: Integrate payment logic
    onComplete({ 
      name: formData.name || '',
      location: formData.location || '',
      whatsappNumber: formData.whatsappNumber || '',
      whatsappConsent: formData.whatsappConsent || false,
      service: formData.service || 'consultation',
      serviceDetails: formData.serviceDetails || '',
      step: formData.step || 4,
      paymentChoice: 'pay-advance'
    });
    closeForm();
  };

  // Handler for Close CTA
  const handleClose = () => {
    onComplete({ 
      name: formData.name || '',
      location: formData.location || '',
      whatsappNumber: formData.whatsappNumber || '',
      whatsappConsent: formData.whatsappConsent || false,
      service: formData.service || 'consultation',
      serviceDetails: formData.serviceDetails || '',
      step: formData.step || 4,
      paymentChoice: 'submit-only'
    });
    closeForm();
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
          {submissionSuccess ? (
            <p className="text-sm text-muted-foreground">
              Your lead has been successfully submitted! (ID: {leadId})<br />
              Our team will review your request and reach out on WhatsApp soon.<br />
              To get started faster, pay a <span className="font-semibold text-primary">₹400 advance</span> now.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Our team will review your request and reach out on WhatsApp soon.<br />
              To get started faster, pay a <span className="font-semibold text-primary">₹400 advance</span> now.
            </p>
          )}
          <div className="flex flex-col gap-3 mt-4">
            <Button onClick={handlePayNow} className="w-full" size="lg">
              Pay 400 Advance
            </Button>
            <Button onClick={handleClose} variant="outline" className="w-full" size="lg">
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 