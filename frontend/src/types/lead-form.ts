export interface LeadFormData {
  // Step 1: Personal Details
  name: string;
  location: string;
  whatsappNumber: string;
  whatsappConsent: boolean;
  
  // Step 2: Service Selection
  service: 'legal-notice' | 'consultation' | 'document-drafting' | 'corporate-retainer';
  serviceDetails?: string;
  
  // Step 3: Payment Choice
  paymentChoice: 'pay-advance' | 'submit-only';
  
  // Metadata
  step: number;
  submittedAt?: Date;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
}

export interface FormValidationError {
  field: string;
  message: string;
} 