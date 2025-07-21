### **5. API Integration**

Communication with Supabase will be handled through **Next.js API Routes** (src/app/api/) to act as a secure backend-for-frontend (BFF).

#### **Client-Side Service Layer (src/services/)**

UI components will call functions in this layer, which then make fetch requests to our Next.js API routes.

// Example: src/services/lead-service.ts\
export const createLead = async (leadData) => {\
const response = await fetch('/api/leads', {\
method: 'POST',\
headers: { 'Content-Type': 'application/json' },\
body: JSON.stringify(leadData),\
});\
if (!response.ok) throw new Error('Failed to submit lead.');\
return response.json();\
};

#### **Next.js API Route (src/app/api/leads/route.ts)**

This server-side code will validate data and securely communicate with Supabase.

// Example: src/app/api/leads/route.ts\
import { createClient } from '@/lib/supabase-server';\
import { leadFormSchema } from '@/lib/validators';

export async function POST(req) {\
try {\
const body = await req.json();\
const parsedData = leadFormSchema.parse(body); // Validate\
const supabase = createClient();\
const { data, error } = await supabase.from('leads').insert(\[parsedData]).select().single();\
if (error) throw error;\
return new Response(JSON.stringify(data), { status: 201 });\
} catch (error) {\
return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400 });\
}\
}
