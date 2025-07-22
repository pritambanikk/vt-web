import { z } from 'zod';

// Step 1: Personal Details Validation
export const personalDetailsSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  location: z
    .string()
    .min(3, 'Location must be at least 3 characters')
    .max(200, 'Location must be less than 200 characters')
    .trim(),
  whatsappNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
    .trim(),
  whatsappConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to WhatsApp communication to proceed',
    }),
});

// Step 2: Service Selection Validation
export const serviceSelectionSchema = z.object({
  service: z.enum(['legal-notice', 'consultation', 'document-drafting', 'corporate-retainer']).refine((val) => val !== undefined, {
    message: 'Please select a service',
  }),
  serviceDetails: z
    .string()
    .max(500, 'Service details must be less than 500 characters')
    .optional(),
});

// Step 3: Payment Choice Validation
export const paymentChoiceSchema = z.object({
  paymentChoice: z.enum(['pay-advance', 'submit-only']).refine((val) => val !== undefined, {
    message: 'Please select a payment option',
  }),
});

// Complete Form Validation
export const leadFormSchema = z.object({
  ...personalDetailsSchema.shape,
  ...serviceSelectionSchema.shape,
  // paymentChoice is set in step 4 only
  paymentChoice: z.enum(['pay-advance', 'submit-only']).optional(),
  step: z.number().min(1).max(4),
  submittedAt: z.union([z.date(), z.string().datetime()]).optional(),
});

export type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>;
export type ServiceSelectionFormData = z.infer<typeof serviceSelectionSchema>;
export type PaymentChoiceFormData = z.infer<typeof paymentChoiceSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>; 