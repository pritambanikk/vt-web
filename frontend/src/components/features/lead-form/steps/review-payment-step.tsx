"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { paymentChoiceSchema, PaymentChoiceFormData } from '@/lib/validators/lead-form';
import { formElementVariants, staggerContainer } from '@/lib/animations';
import { LeadFormData } from '@/types/lead-form';
import { Clock, Shield, Zap, Star } from 'lucide-react';

interface ReviewPaymentStepProps {
  formData: LeadFormData;
  initialData?: Partial<PaymentChoiceFormData>;
}

const servicePrices = {
  'legal-notice': '₹999',
  'consultation': '₹1,499',
  'document-drafting': '₹2,499',
  'corporate-retainer': '₹9,999',
};

const benefits = [
  {
    icon: Zap,
    title: 'Priority Service',
    description: 'Get your case handled first',
    color: 'text-blue-600'
  },
  {
    icon: Clock,
    title: 'Faster Response',
    description: '24-hour initial response',
    color: 'text-green-600'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Bank-grade security',
    color: 'text-purple-600'
  },
  {
    icon: Star,
    title: 'Premium Support',
    description: 'Dedicated legal expert',
    color: 'text-orange-600'
  }
];

export const ReviewPaymentStep = ({ 
  formData, 
  initialData
}: ReviewPaymentStepProps) => {
  const {
    formState: { errors },
  } = useForm<PaymentChoiceFormData>({
    resolver: zodResolver(paymentChoiceSchema),
    defaultValues: initialData,
    mode: 'onChange',
  });



  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Top Row: Review + Benefits Side by Side */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Review Section - Compact */}
        <motion.div variants={formElementVariants}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Review Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">Personal Details</h4>
                <div className="space-y-1">
                  <p className="text-sm"><span className="font-medium">Name:</span> {formData.name}</p>
                  <p className="text-sm"><span className="font-medium">Location:</span> {formData.location}</p>
                  <p className="text-sm"><span className="font-medium">WhatsApp:</span> {formData.whatsappNumber}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wide">Service Details</h4>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">Service:</span> {formData.service?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Price:</span> {servicePrices[formData.service as keyof typeof servicePrices]}
                  </p>
                  {formData.serviceDetails && (
                    <p className="text-sm">
                      <span className="font-medium">Details:</span> {formData.serviceDetails}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits Section - Compact */}
        <motion.div variants={formElementVariants}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Why Pay Upfront?</CardTitle>
              <p className="text-xs text-muted-foreground">Get premium benefits with advance payment</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      variants={formElementVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex justify-center mb-1">
                        <IconComponent className={`w-4 h-4 ${benefit.color}`} />
                      </div>
                      <h4 className="text-xs font-medium mb-1">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground leading-tight">{benefit.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>



      {errors.paymentChoice && (
        <motion.p
          className="text-sm text-destructive"
          variants={formElementVariants}
          initial="hidden"
          animate="visible"
        >
          {errors.paymentChoice.message}
        </motion.p>
      )}
    </motion.div>
  );
}; 