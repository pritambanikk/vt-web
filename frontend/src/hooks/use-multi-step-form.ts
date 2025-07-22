import { useState, useCallback, useRef } from 'react';
import { LeadFormData } from '@/types/lead-form';



export const useMultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const isUpdatingRef = useRef(false);
  const [formData, setFormData] = useState<Partial<LeadFormData>>({ step: 1 });

  const updateFormData = useCallback((data: Partial<LeadFormData>) => {
    if (isUpdatingRef.current) return;
    
    isUpdatingRef.current = true;
    
    // Ensure we only store serializable data
    const cleanData = Object.keys(data).reduce((acc, key) => {
      const value = data[key as keyof typeof data];
      if (
        value === null ||
        value === undefined ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        (typeof value === 'object' && !(value instanceof Element) && !(value instanceof Event))
      ) {
        (acc as Record<string, unknown>)[key] = value;
      }
      return acc;
    }, {} as Partial<LeadFormData>);
    
    const newData = { ...formData, ...cleanData };
    setFormData(newData);
    
    // No localStorage persistence
    
    // Reset the flag after a short delay
    setTimeout(() => {
      isUpdatingRef.current = false;
    }, 0);
  }, [formData]);

  const nextStep = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
    }
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ step: 1 });
    setCurrentStep(1);
    // No localStorage persistence
  }, []);

  const isStepComplete = useCallback((step: number) => {
    switch (step) {
      case 1:
        // Check if all required fields are filled and valid
        const hasName = formData.name && formData.name.length >= 2;
        const hasLocation = formData.location && formData.location.length >= 3;
        // More flexible WhatsApp validation - accepts 10 digits starting with 6-9, with or without +91/91 prefix
        const hasWhatsApp = formData.whatsappNumber && (() => {
          const cleanNumber = formData.whatsappNumber!.replace(/\s/g, '');
          return /^[6-9]\d{9}$/.test(cleanNumber) || // 10 digits starting with 6-9
                 /^(\+91|91)[6-9]\d{9}$/.test(cleanNumber); // with +91 or 91 prefix
        })();
        const hasConsent = formData.whatsappConsent === true;
        
        return hasName && hasLocation && hasWhatsApp && hasConsent;
      case 2:
        return !!formData.service;
      case 3:
        // Step 3: Review step, always complete
        return true;
      case 4:
        // Step 4: WhatsNextStep, always complete
        return true;
      default:
        return false;
    }
  }, [formData]);

  return {
    currentStep,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    resetForm,
    isStepComplete,
    canGoNext: isStepComplete(currentStep),
    canGoPrev: currentStep > 1,
  };
}; 