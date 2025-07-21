import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase-server';
import { leadFormSchema } from '@/lib/validators/lead-form';
import { z } from 'zod';

// API Response interface

interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  error?: string;
  message?: string;
}

// Database insertion schema (matches the leads table structure)
const leadInsertSchema = z.object({
  name: z.string().min(2).max(255),
  location: z.string().min(3).max(255),
  whatsapp_number: z.string().regex(/^(\+91|91)?[6-9]\d{9}$/),
  service: z.enum(['legal-notice', 'consultation', 'document-drafting', 'corporate-retainer']),
  service_details: z.string().max(500).optional(),
  payment_choice: z.enum(['pay-advance', 'submit-only']),
  whatsapp_consent: z.boolean(),
  payment_status: z.literal('pending'),
  status: z.literal('new'),
});

export async function POST(request: NextRequest): Promise<NextResponse<LeadSubmissionResponse>> {
  try {
    // Parse and validate request body
    const body = await request.json();
    console.log('Received form data:', JSON.stringify(body, null, 2));
    
    // Validate the incoming request data
    const validatedData = leadFormSchema.parse(body);
    
    // Transform form data to database format
    const leadData = {
      name: validatedData.name,
      location: validatedData.location,
      whatsapp_number: validatedData.whatsappNumber,
      service: validatedData.service,
      service_details: validatedData.serviceDetails,
      payment_choice: validatedData.paymentChoice || 'submit-only', // Default if not set
      whatsapp_consent: validatedData.whatsappConsent,
      payment_status: 'pending' as const,
      status: 'new' as const,
    };

    // Validate the transformed data
    const validatedLeadData = leadInsertSchema.parse(leadData);

    // Insert into Supabase
    const { data, error } = await supabaseServer
      .from('leads')
      .insert([validatedLeadData])
      .select('id')
      .single();

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save lead to database',
          message: 'Please try again or contact support if the problem persists.'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        leadId: data.id,
        message: 'Lead submitted successfully!'
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API route error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please check your form data and try again.'
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 