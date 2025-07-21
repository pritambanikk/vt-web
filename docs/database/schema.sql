-- Supabase leads table schema
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(20) NOT NULL,
  service VARCHAR(100) NOT NULL,
  service_details TEXT,
  payment_choice VARCHAR(50) NOT NULL DEFAULT 'submit-only',
  whatsapp_consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_amount DECIMAL(10,2),
  payment_reference VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT
);

-- Indexes
CREATE INDEX idx_leads_created_at ON leads(created_at);
CREATE INDEX idx_leads_whatsapp_number ON leads(whatsapp_number);
CREATE INDEX idx_leads_service ON leads(service);
CREATE INDEX idx_leads_payment_status ON leads(payment_status);
CREATE INDEX idx_leads_status ON leads(status);

-- Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Allow all authenticated users to insert leads" ON leads
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Allow users to select their own leads" ON leads
  FOR SELECT TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Allow users to update their own leads" ON leads
  FOR UPDATE TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Allow users to delete their own leads" ON leads
  FOR DELETE TO authenticated
  USING (auth.uid() IS NOT NULL); 