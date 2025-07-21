"use client"

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MultiStepForm } from './multi-step-form';
import { ProgressIndicator } from './progress-indicator';
import { useLeadFormModal } from '@/hooks/use-lead-form-modal';
import { LeadFormData } from '@/types/lead-form';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (data: LeadFormData) => void;
  initialService?: string;
}

export const LeadFormModal = ({ isOpen, onClose, onComplete, initialService }: LeadFormModalProps) => {
  const { handleEscapeKey } = useLeadFormModal();
  const [currentStep, setCurrentStep] = useState(1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  const [shouldProceed, setShouldProceed] = useState(false);
  const [shouldGoBack, setShouldGoBack] = useState(false);
  const [shouldSubmitAndPay, setShouldSubmitAndPay] = useState(false);
  const [shouldSubmitTicket, setShouldSubmitTicket] = useState(false);

  // Handle escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => document.removeEventListener('keydown', handleEscapeKey);
    }
  }, [isOpen, handleEscapeKey]);

  const handleComplete = (data: LeadFormData) => {
    console.log('Form completed:', data);
    onComplete?.(data);
    onClose();
  };

  const handleStepChange = (step: number, canProceed: boolean) => {
    setCurrentStep(step);
    setCanProceed(canProceed);
  };

  const handleContinue = () => {
    setShouldProceed(true);
    setTimeout(() => setShouldProceed(false), 100);
  };

  const handleBack = () => {
    setShouldGoBack(true);
    setTimeout(() => setShouldGoBack(false), 100);
  };

  const handleSubmitAndPay = () => {
    setShouldSubmitAndPay(true);
    setTimeout(() => setShouldSubmitAndPay(false), 100);
  };

  const handleSubmitTicket = () => {
    setShouldSubmitTicket(true);
    setTimeout(() => setShouldSubmitTicket(false), 100);
  };



  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Personal Details';
      case 2:
        return 'Service Selection';
      case 3:
        return 'Review & Payment';
      default:
        return 'Get Legal Help';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return 'Please provide your basic information to get started';
      case 2:
        return 'Choose the legal service you need';
      case 3:
        return 'Review your information and choose your payment option';
      default:
        return '';
    }
  };

  const steps = [
    { id: 1, title: 'Personal Details', description: 'Basic information' },
    { id: 2, title: 'Service Selection', description: 'Choose service' },
    { id: 3, title: 'Review & Payment', description: 'Final step' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
            {/* Fixed Header */}
            <DialogHeader className="px-6 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <DialogTitle className="text-xl font-semibold">
                {getStepTitle()}
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                {getStepDescription()}
              </p>
              {/* Progress Indicator */}
              <div className="mt-4">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps.length}
                  steps={steps}
                />
              </div>
            </DialogHeader>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <MultiStepForm
                onComplete={handleComplete}
                onStepChange={handleStepChange}
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
                shouldProceed={shouldProceed}
                shouldGoBack={shouldGoBack}
                shouldSubmitAndPay={shouldSubmitAndPay}
                shouldSubmitTicket={shouldSubmitTicket}
                initialService={initialService}
              />
            </div>

            {/* Fixed Footer */}
            <div className="px-6 py-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of 3
                </div>
                <div className="flex gap-3">
                  {currentStep > 1 && currentStep < 3 && (
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                  )}
                  {currentStep === 3 ? (
                    <>
                      <Button
                        variant="outline"
                        onClick={handleSubmitTicket}
                        disabled={!canProceed || isSubmitting}
                      >
                        Submit Ticket
                      </Button>
                      <Button
                        onClick={handleSubmitAndPay}
                        disabled={!canProceed || isSubmitting}
                      >
                        Submit & Pay
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleContinue}
                      disabled={!canProceed || isSubmitting}
                      className="min-w-[120px]"
                    >
                      Continue
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}; 