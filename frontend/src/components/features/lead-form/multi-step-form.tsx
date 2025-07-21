"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { PersonalDetailsStep } from './steps/personal-details-step';
import { ServiceSelectionStep } from './steps/service-selection-step';
import { ReviewPaymentStep } from './steps/review-payment-step';
import { WhatsNextStep } from './steps/whats-next-step';
import { stepVariants } from '@/lib/animations';
import { useFormContext } from '@/contexts/form-context';

export const MultiStepForm = () => {
  const {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    resetForm,
    goToStep,
  } = useFormContext();

  const handleStepComplete = (stepData: Record<string, unknown>) => {
    updateFormData(stepData);
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
    <div className="w-full max-w-2xl mx-auto space-y-4 sm:space-y-6">
      <div className="min-h-[300px] sm:min-h-[400px]">
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