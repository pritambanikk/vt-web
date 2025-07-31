"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { serviceSelectionSchema, ServiceSelectionFormData } from '@/lib/validators/lead-form';
import { formElementVariants, staggerContainer } from '@/lib/animations';
import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface ServiceSelectionStepProps {
  initialData?: Partial<ServiceSelectionFormData>;
  onNext: (data: ServiceSelectionFormData) => void;
  onDataUpdate?: (data: Partial<ServiceSelectionFormData>) => void;
  setIsStepValid?: (valid: boolean) => void;
}

const services = [
  {
    value: 'legal-notice',
    label: 'Legal Notice',
    description: 'Send legal notices to individuals or organizations',
    price: '₹999',
  },
  {
    value: 'consultation',
    label: 'Legal Consultation',
    description: 'Get expert legal advice on your case',
    price: '₹1,499',
  },
  {
    value: 'document-drafting',
    label: 'Document Drafting',
    description: 'Professional legal document preparation',
    price: '₹2,499',
  },
  {
    value: 'corporate-retainer',
    label: 'Corporate Retainer',
    description: 'Ongoing legal support for businesses',
    price: '₹9,999',
  },
];

export const ServiceSelectionStep = ({ initialData, onNext, onDataUpdate, setIsStepValid }: ServiceSelectionStepProps) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showDescriptionHint, setShowDescriptionHint] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<ServiceSelectionFormData>({
    resolver: zodResolver(serviceSelectionSchema),
    defaultValues: initialData,
    mode: 'onChange',
  });

  useEffect(() => {
    if (setIsStepValid) setIsStepValid(isValid);
  }, [isValid, setIsStepValid]);

  // Reset hint when component mounts or when initialData changes
  useEffect(() => {
    setShowDescriptionHint(false);
  }, [initialData]);

  const selectedService = watch('service');
  const { logEvent } = useAnalytics();

  const onSubmit = (data: ServiceSelectionFormData) => {
    onNext(data);
  };

  const handleServiceSelect = (value: string) => {
    setValue('service', value as ServiceSelectionFormData['service'], { shouldValidate: true });
    // Update parent data when service is selected
    onDataUpdate?.({ service: value as ServiceSelectionFormData['service'] });
    logEvent('service_selected', {
      service: value,
      step_number: 2,
    });
    
    // Show hint and scroll to description section
    setShowDescriptionHint(true);
    setTimeout(() => {
      if (descriptionRef.current) {
        descriptionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Focus on the textarea after scrolling
        const textarea = descriptionRef.current.querySelector('textarea');
        if (textarea) {
          setTimeout(() => {
            textarea.focus();
          }, 500);
        }
      }
    }, 300);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >


      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <motion.div variants={formElementVariants} className="space-y-4">
          <Label>Legal Service *</Label>
          <div className="grid gap-3">
            {services.map((service) => (
              <Card
                key={service.value}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedService === service.value
                    ? 'ring-2 ring-primary bg-primary/5'
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => handleServiceSelect(service.value)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium">{service.label}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{service.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {errors.service && (
            <motion.p
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.service.message}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          ref={descriptionRef}
          variants={formElementVariants} 
          className="space-y-2"
          animate={showDescriptionHint ? { 
            scale: [1, 1.02, 1],
            transition: { duration: 0.5 }
          } : {}}
        >
          <div className="flex items-center gap-2">
            <Label htmlFor="serviceDetails">Additional Details (Optional)</Label>
            {showDescriptionHint && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                💡 Add details to help us serve you better
              </motion.span>
            )}
          </div>
          <Textarea
            id="serviceDetails"
            placeholder="Please provide any additional details about your legal requirement..."
            {...register('serviceDetails')}
            rows={3}
            className={showDescriptionHint ? 'ring-2 ring-primary/20 transition-all duration-300' : ''}
          />
          {errors.serviceDetails && (
            <motion.p
              className="text-sm text-destructive"
              variants={formElementVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.serviceDetails.message}
            </motion.p>
          )}
        </motion.div>

        {/* Hidden submit button for form validation */}
        <button type="submit" style={{ display: 'none' }} />

      </form>
    </motion.div>
  );
}; 