"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formElementVariants, staggerContainer } from '@/lib/animations';
import { LeadFormData } from '@/types/lead-form';
import { Pencil, CreditCard, Send } from 'lucide-react';
import { getPaymentConfig, formatAmount } from '@/lib/payment-config';
import { useFormContext } from '@/contexts/form-context';

interface ReviewPaymentStepProps {
  formData: Partial<LeadFormData>;
  onEditPersonalDetails?: () => void;
}

// Get payment config for the selected service
const getServicePrice = (service: string) => {
  const config = getPaymentConfig(service);
  return config ? formatAmount(config.amount) : '';
};

export const ReviewPaymentStep = ({ 
  formData, 
  onEditPersonalDetails
}: ReviewPaymentStepProps) => {
  const { submitForm, processPayment, isSubmitting, isProcessingPayment, submissionError, paymentError } = useFormContext();
  
  // Fallbacks for required fields
  const name = formData.name || '';
  const location = formData.location || '';
  const whatsappNumber = formData.whatsappNumber || '';
  const service = formData.service || '';
  const serviceDetails = formData.serviceDetails || '';
  const paymentChoice = formData.paymentChoice || 'submit-only';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Review Section */}
      <motion.div variants={formElementVariants}>
        <Card className="h-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Review Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">Personal Details</h4>
                {onEditPersonalDetails && (
                  <button
                    type="button"
                    onClick={onEditPersonalDetails}
                    aria-label="Edit personal details"
                    className="ml-2 p-1 rounded hover:bg-muted/30 focus:outline-none focus:ring"
                  >
                    <Pencil className="w-4 h-4 text-primary" />
                  </button>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm"><span className="font-medium">Name:</span> {name}</p>
                <p className="text-sm"><span className="font-medium">Location:</span> {location}</p>
                <p className="text-sm"><span className="font-medium">WhatsApp:</span> {whatsappNumber}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">Service Details</h4>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Service:</span> {service ? service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : ''}
                </p>
                <p className="text-sm">
                  <span className="font-medium">Price:</span> {getServicePrice(service)}
                </p>
                {serviceDetails && (
                  <p className="text-sm">
                    <span className="font-medium">Details:</span> {serviceDetails}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">Payment Choice</h4>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Option:</span> {paymentChoice === 'pay-advance' ? 'Pay Advance' : 'Submit Only'}
                </p>
                {paymentChoice === 'pay-advance' && (
                  <p className="text-sm">
                    <span className="font-medium">Advance Amount:</span> {getServicePrice(service)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Action Buttons */}
      <motion.div variants={formElementVariants} className="space-y-3">
        {/* Error Messages */}
        {submissionError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{submissionError}</p>
          </div>
        )}
        {paymentError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{paymentError}</p>
          </div>
        )}

      </motion.div>
    </motion.div>
  );
}; 