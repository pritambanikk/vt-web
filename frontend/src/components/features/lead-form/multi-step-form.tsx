"use client"

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { PersonalDetailsStep } from './steps/personal-details-step';
import { ServiceSelectionStep } from './steps/service-selection-step';
import { ReviewPaymentStep } from './steps/review-payment-step';
import { useMultiStepForm } from '@/hooks/use-multi-step-form';
import { stepVariants } from '@/lib/animations';
import { LeadFormData } from '@/types/lead-form';

interface MultiStepFormProps {
  onComplete: (data: LeadFormData) => void;
  onStepChange?: (step: number, canProceed: boolean) => void;
  isSubmitting?: boolean;
  setIsSubmitting?: (submitting: boolean) => void;
  shouldProceed?: boolean;
  shouldGoBack?: boolean;
  shouldSubmitAndPay?: boolean;
  shouldSubmitTicket?: boolean;
  initialService?: string;
}



export const MultiStepForm = ({ 
  onComplete, 
  onStepChange, 
  isSubmitting: externalIsSubmitting, 
  setIsSubmitting: externalSetIsSubmitting,
  shouldProceed,
  shouldGoBack,
  shouldSubmitAndPay,
  shouldSubmitTicket,
  initialService
}: MultiStepFormProps) => {
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
    isStepComplete,
  } = useMultiStepForm();

  // Set initial service if provided
  useEffect(() => {
    if (initialService && !formData.service) {
      updateFormData({ service: initialService as LeadFormData['service'] });
    }
  }, [initialService, formData.service, updateFormData]);

  const [internalIsSubmitting, setInternalIsSubmitting] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isSubmitting = externalIsSubmitting ?? internalIsSubmitting;
  const setIsSubmitting = externalSetIsSubmitting ?? setInternalIsSubmitting;

  // Handle step navigation
  const handleStepComplete = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
    nextStep();
  };

  // Handle form data updates without advancing steps
  const handleFormDataUpdate = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
  };

  // Handle footer button actions
  const handleContinue = useCallback(() => {
    if (currentStep === 1 || currentStep === 2) {
      // Check if current step is complete before proceeding
      if (isStepComplete(currentStep) === true) {
        nextStep();
      } else {
        // If step is not complete, trigger form validation
        const form = document.querySelector('form');
        if (form) {
          const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
          if (submitButton) {
            submitButton.click();
          }
        }
      }
    }
  }, [currentStep, isStepComplete, nextStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      prevStep();
    }
  }, [currentStep, prevStep]);

  const handleSubmitAndPay = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const completeFormData: LeadFormData = {
        ...formData,
        paymentChoice: 'pay-advance',
        submittedAt: new Date(),
      } as LeadFormData;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onComplete(completeFormData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onComplete, setIsSubmitting]);

  const handleSubmitTicket = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const completeFormData: LeadFormData = {
        ...formData,
        paymentChoice: 'submit-only',
        submittedAt: new Date(),
      } as LeadFormData;

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onComplete(completeFormData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onComplete, setIsSubmitting]);

  // Notify parent of step changes
  useEffect(() => {
    onStepChange?.(currentStep, isStepComplete(currentStep) || false);
  }, [currentStep, isStepComplete, onStepChange]);

  // Handle trigger props from parent
  useEffect(() => {
    if (shouldProceed) {
      handleContinue();
    }
  }, [shouldProceed, handleContinue]);

  useEffect(() => {
    if (shouldGoBack) {
      handleBack();
    }
  }, [shouldGoBack, handleBack]);

  useEffect(() => {
    if (shouldSubmitAndPay) {
      handleSubmitAndPay();
    }
  }, [shouldSubmitAndPay, handleSubmitAndPay]);

  useEffect(() => {
    if (shouldSubmitTicket) {
      handleSubmitTicket();
    }
  }, [shouldSubmitTicket, handleSubmitTicket]);

  // Handle form reset on close
  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            initialData={formData}
            onNext={handleStepComplete}
            onDataUpdate={handleFormDataUpdate}
          />
        );
      case 2:
        return (
          <ServiceSelectionStep
            initialData={formData}
            onNext={handleStepComplete}
            onDataUpdate={handleFormDataUpdate}
          />
        );
      case 3:
        return (
          <ReviewPaymentStep
            formData={formData as LeadFormData}
            initialData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Form Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </div>


    </div>
  );
}; 