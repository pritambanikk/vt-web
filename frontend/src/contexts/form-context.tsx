"use client"

import React, { createContext, useContext, useState, useCallback } from 'react';
import { LeadFormData } from '@/types/lead-form';
import { submitLead } from '@/services/lead-service';

interface FormContextType {
  currentStep: number;
  formData: Partial<LeadFormData>;
  updateFormData: (data: Partial<LeadFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  resetForm: () => void;
  openForm: (serviceType?: string) => void;
  closeForm: () => void;
  isFormOpen: boolean;
  isSubmitting: boolean;
  submitForm: () => Promise<void>;
  submissionError: string | null;
}

interface FormProviderProps {
  children: React.ReactNode;
  initialService?: string;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<FormProviderProps> = ({ children, initialService }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<LeadFormData>>(
    initialService ? { service: initialService as LeadFormData['service'] } : {}
  );
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const updateFormData = useCallback((data: Partial<LeadFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    setCurrentStep(() => Math.max(1, Math.min(step, 4)));
  }, []);

  const resetForm = useCallback(() => {
    setCurrentStep(1);
    setFormData({});
    setIsFormOpen(false);
  }, []);

  const openForm = useCallback((serviceType?: string) => {
    if (serviceType) {
      setFormData((prev) => ({ ...prev, service: serviceType as LeadFormData['service'] }));
      // If service is already selected, skip to step 3 (review)
      if (formData.service === serviceType) {
        setCurrentStep(3);
      } else {
        setCurrentStep(1);
      }
    } else {
      setCurrentStep(1);
    }
    setIsFormOpen(true);
  }, [formData.service]);

  const closeForm = useCallback(() => {
    setIsFormOpen(false);
    resetForm();
  }, [resetForm]);

  const submitForm = useCallback(async () => {
    if (!formData.name || !formData.location || !formData.whatsappNumber || !formData.service) {
      setSubmissionError('Please complete all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const completeFormData: LeadFormData = {
        ...formData,
        name: formData.name!,
        location: formData.location!,
        whatsappNumber: formData.whatsappNumber!,
        service: formData.service!,
        serviceDetails: formData.serviceDetails || undefined,
        paymentChoice: 'submit-only', // Default for now
        whatsappConsent: formData.whatsappConsent || false,
        step: currentStep,
        submittedAt: new Date()
      };

      const result = await submitLead(completeFormData);

      if (result.success) {
        // Update form data with submission response
        updateFormData({
          leadId: result.leadId,
          submissionSuccess: true,
          paymentChoice: 'submit-only'
        });
        // Move to next step
        nextStep();
      } else {
        setSubmissionError(result.message || 'Failed to submit lead. Please try again.');
      }
    } catch (err) {
      setSubmissionError('An unexpected error occurred. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, updateFormData, nextStep, currentStep]);

  return (
    <FormContext.Provider
      value={{ 
        currentStep, 
        formData, 
        updateFormData, 
        nextStep, 
        prevStep, 
        goToStep, 
        resetForm,
        openForm,
        closeForm,
        isFormOpen,
        isSubmitting,
        submitForm,
        submissionError
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within a FormProvider');
  return ctx;
}; 