"use client"

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
import { useFormContext } from '@/contexts/form-context';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export const LeadFormModal = () => {
  const { 
    currentStep, 
    nextStep, 
    prevStep, 
    isFormOpen, 
    closeForm, 
    isSubmitting, 
    submitForm, 
    submissionError 
  } = useFormContext();

  const [isStepValid, setIsStepValid] = useState(false);

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Personal Details';
      case 2:
        return 'Service Selection';
      case 3:
        return 'Review & Submit';
      case 4:
        return "What's Next";
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
        return 'Review your information and submit your ticket';
      case 4:
        return 'Your ticket is submitted! Next steps below.';
      default:
        return '';
    }
  };

  const steps = [
    { id: 1, title: 'Personal Details', description: 'Basic information' },
    { id: 2, title: 'Service Selection', description: 'Choose service' },
    { id: 3, title: 'Review & Submit', description: 'Final review' },
    { id: 4, title: "What's Next", description: 'Next steps' },
  ];

  return (
    <AnimatePresence>
      {isFormOpen && (
        <Dialog open={isFormOpen} onOpenChange={closeForm}>
          <DialogContent className="w-[95vw] max-w-4xl h-[90svh] sm:h-[95dvh] max-h-[90svh] sm:max-h-[95dvh] flex flex-col p-0 mx-auto overflow-hidden">
            {/* Fixed Header */}
            <DialogHeader className="px-4 sm:px-6 py-3 sm:py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
              <DialogTitle className="text-lg sm:text-xl font-semibold">
                {getStepTitle()}
              </DialogTitle>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {getStepDescription()}
              </p>
              {/* Progress Indicator */}
              <div className="mt-3 sm:mt-4">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps.length}
                  steps={steps}
                />
              </div>
            </DialogHeader>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-hidden px-4 sm:px-6 py-4 sm:py-6">
              <MultiStepForm setIsStepValid={setIsStepValid} />
              
              {/* Error Display */}
              {submissionError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{submissionError}</p>
                </div>
              )}
            </div>

            {/* Fixed Footer */}
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Step {currentStep} of 4
                </div>
                <div className="flex gap-2 sm:gap-3">
                  {currentStep > 1 && currentStep < 4 && (
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      size="sm"
                      className="sm:text-base"
                    >
                      Back
                    </Button>
                  )}
                  {currentStep === 3 ? (
                    <Button
                      onClick={submitForm}
                      disabled={isSubmitting}
                      size="sm"
                      className="min-w-[100px] sm:min-w-[120px] sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Ticket'
                      )}
                    </Button>
                  ) : currentStep < 3 ? (
                    <Button
                      onClick={nextStep}
                      size="sm"
                      className="min-w-[100px] sm:min-w-[120px] sm:text-base"
                      disabled={!isStepValid}
                    >
                      Continue
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

 