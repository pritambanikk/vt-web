"use client"

import React, { createContext, useContext, useState, useCallback } from 'react';
import { LeadFormData } from '@/types/lead-form';
import { submitLead } from '@/services/lead-service';
import { initializePayment } from '@/services/payment-service';
import { createPaymentRequest } from '@/lib/payment-config';
import { useAnalytics } from '@/hooks/use-analytics';

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
  isProcessingPayment: boolean;
  submitForm: () => Promise<void>;
  processPayment: () => Promise<void>;
  submissionError: string | null;
  paymentError: string | null;
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
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

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

  const { logEvent } = useAnalytics();

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
        paymentChoice: formData.paymentChoice || 'submit-only',
        whatsappConsent: formData.whatsappConsent ?? true,
        step: currentStep,
        submittedAt: new Date()
      };

      const result = await submitLead(completeFormData);

      if (result.success) {
        // Update form data with submission response
        updateFormData({
          leadId: result.leadId,
          submissionSuccess: true,
          paymentChoice: completeFormData.paymentChoice
        });
        // Analytics: Lead form submitted
        logEvent('lead_form_submitted', {
          service: completeFormData.service,
          payment_choice: completeFormData.paymentChoice,
          form_step_count: completeFormData.step,
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
  }, [formData, updateFormData, nextStep, currentStep, logEvent]);

  const processPayment = useCallback(async () => {
    if (!formData.leadId || !formData.service || !formData.name) {
      setPaymentError('Missing required data for payment');
      return;
    }

    setIsProcessingPayment(true);
    setPaymentError(null);

    try {
      // Create payment request
      const paymentRequest = createPaymentRequest(
        formData.service,
        formData.leadId,
        formData.name
      );

      if (!paymentRequest) {
        setPaymentError('Failed to create payment request');
        return;
      }

      // Initialize payment
      await initializePayment(
        paymentRequest,
        formData.name,
        formData.whatsappNumber || '',
        (response) => {
          // Payment successful
          updateFormData({
            paymentSuccess: true,
            paymentId: response.razorpay_payment_id
          });
          // Analytics: Advance paid
          logEvent('advance_paid', {
            service: formData.service,
            payment_amount: paymentRequest.amount,
            payment_method: 'razorpay',
            lead_id: formData.leadId,
          });
          nextStep();
        },
        (error) => {
          setPaymentError(error);
        }
      );

    } catch (err) {
      setPaymentError('Payment initialization failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setIsProcessingPayment(false);
    }
  }, [formData, updateFormData, nextStep, logEvent]);

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
        isProcessingPayment,
        submitForm,
        processPayment,
        submissionError,
        paymentError
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