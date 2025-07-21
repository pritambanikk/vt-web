"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formElementVariants, staggerContainer } from '@/lib/animations';
import { LeadFormData } from '@/types/lead-form';
import { Pencil } from 'lucide-react';

interface ReviewPaymentStepProps {
  formData: Partial<LeadFormData>;
  onEditPersonalDetails?: () => void;
}

const servicePrices = {
  'legal-notice': '₹999',
  'consultation': '₹1,499',
  'document-drafting': '₹2,499',
  'corporate-retainer': '₹9,999',
};

export const ReviewPaymentStep = ({ 
  formData, 
  onEditPersonalDetails
}: ReviewPaymentStepProps) => {
  // Fallbacks for required fields
  const name = formData.name || '';
  const location = formData.location || '';
  const whatsappNumber = formData.whatsappNumber || '';
  const service = formData.service || '';
  const serviceDetails = formData.serviceDetails || '';

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
                  <span className="font-medium">Price:</span> {servicePrices[service as keyof typeof servicePrices] || ''}
                </p>
                {serviceDetails && (
                  <p className="text-sm">
                    <span className="font-medium">Details:</span> {serviceDetails}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}; 