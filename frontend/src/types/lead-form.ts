export interface LeadFormData {
  // Step 1: Personal Details
  name: string;
  location: string;
  whatsappNumber: string;
  whatsappConsent: boolean;
  
  // Step 2: Service Selection
  service: 'legal-notice' | 'consultation' | 'document-drafting' | 'corporate-retainer';
  serviceDetails?: string;
  
  // Step 3: Review (no payment choice)
  // Step 4: Post-submission (paymentChoice set by WhatsNextStep)
  paymentChoice?: 'pay-advance' | 'submit-only';
  
  // Metadata
  step: number;
  submittedAt?: Date;
  
  // Submission response data
  leadId?: string;
  submissionSuccess?: boolean;
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