"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { PersonalDetailsStep } from './steps/personal-details-step';
import { ServiceSelectionStep } from './steps/service-selection-step';
import { ReviewPaymentStep } from './steps/review-payment-step';
import { WhatsNextStep } from './steps/whats-next-step';
import { stepVariants } from '@/lib/animations';
import { useFormContext } from '@/contexts/form-context';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

interface MultiStepFormProps {
  setIsStepValid?: (valid: boolean) => void;
}

export const MultiStepForm = ({ setIsStepValid }: MultiStepFormProps) => {
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    resetForm,
    goToStep,
  } = useFormContext();

  const { logEvent } = useAnalytics();

  // Set step validity for steps that don't have form validation
  useEffect(() => {
    if (setIsStepValid) {
      if (currentStep === 3 || currentStep === 4) {
        setIsStepValid(true);
      }
    }
  }, [currentStep, setIsStepValid]);

  const handleStepComplete = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
    logEvent('form_step_completed', {
      step_number: currentStep,
      service: formData.service || stepData.service || undefined,
    });
    if (currentStep === 1) {
      // If service is already selected, skip to review
      if (formData.service) {
        goToStep(3);
      } else {
        nextStep();
      }
    } else {
      nextStep();
    }
  };

  const handleFormDataUpdate = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            initialData={formData}
            onNext={handleStepComplete}
            onDataUpdate={handleFormDataUpdate}
            setIsStepValid={setIsStepValid}
          />
        );
      case 2:
        return (
          <ServiceSelectionStep
            initialData={formData}
            onNext={handleStepComplete}
            onDataUpdate={handleFormDataUpdate}
            setIsStepValid={setIsStepValid}
          />
        );
      case 3:
        return (
          <ReviewPaymentStep
            formData={formData}
            onEditPersonalDetails={() => goToStep(1)}
          />
        );
      case 4:
        return (
          <WhatsNextStep
            formData={formData}
            onComplete={resetForm}
            leadId={formData.leadId as string}
            submissionSuccess={formData.submissionSuccess as boolean}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-6 overflow-hidden">
      <div className="min-h-[50svh] p-2 sm:min-h-[60dvh] max-h-[70svh] sm:max-h-[75dvh] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}; 