### **Vakil-Tech Frontend Architecture**

| Date | Version | Description | Author |
| :---- | :---- | :---- | :---- |
| 13/07/2024 | 1.4 | Updated API integration to use Next.js API Routes | Winston, Architect |

### **1\. Introduction**

This document outlines the complete frontend architecture for the Vakil-Tech website. It provides a technical blueprint for developers, detailing the project structure, component standards, state management, and coding conventions.

### **2\. Frontend Tech Stack**

| Category | Technology | Version | Purpose & Rationale |
| :---- | :---- | :---- | :---- |
| **Framework** | Next.js (React) | Latest | Robust, performant foundation with App Router and integrated API routes. |
| **Language** | TypeScript | Latest | Ensures type safety and improves code quality. |
| **UI Library** | shadcn/ui | Latest | Reusable, accessible components built on Radix UI and Tailwind. |
| **Styling** | Tailwind CSS | Latest | Utility-first CSS framework for rapid UI development. |
| **State Management** | React Context / Hooks | N/A | For managing simple, local state. |
| **Form Handling** | React Hook Form | Latest | For performant and flexible form validation. |
| **Testing** | Jest & React Testing Library | Latest | Standard for testing React applications. |
| **Linting** | ESLint | Latest | To enforce code quality and a consistent style. |

### **3\. Project Structure**

The project will follow a standard Next.js **App Router** structure. The app/api directory will house our backend logic.

/  
├── src/  
│   ├── app/  
│   │   ├── page.tsx          \# Homepage (/)  
│   │   ├── legal-notice/page.tsx  
│   │   ├── consultation/page.tsx  
│   │   ├── document-drafting/page.tsx  
│   │   ├── corporate-retainer/page.tsx  
│   │   ├── api/  
│   │   │   └── leads/  
│   │   │       └── route.ts  \# API endpoint for creating leads  
│   │   ├── layout.tsx  
│   │   └── globals.css  
│   ├── components/  
│   │   ├── ui/               \# shadcn/ui components  
│   │   ├── shared/           \# Header, Footer, etc.  
│   │   └── features/         \# LeadForm, etc.  
│   ├── lib/  
│   │   ├── supabase-server.ts \# Supabase server-side client  
│   │   ├── utils.ts  
│   │   └── validators.ts     \# Zod validation schemas  
│   ├── services/             \# Client-side functions for calling our API  
│   └── types/                \# TypeScript type definitions  
├── ... (config files)

### **4\. Component Standards**

* **Organization**: Components will be organized into shared (reusable across pages) and features (specific to a single feature).  
* **Template**: All components will be React functional components using TypeScript and React.forwardRef.  
* **Naming**: Files will be kebab-case.tsx, components PascalCase, and props interfaces ComponentNameProps.

### **5\. API Integration**

Communication with Supabase will be handled through **Next.js API Routes** (src/app/api/) to act as a secure backend-for-frontend (BFF).

#### **Client-Side Service Layer (src/services/)**

UI components will call functions in this layer, which then make fetch requests to our Next.js API routes.

// Example: src/services/lead-service.ts  
export const createLead \= async (leadData) \=\> {  
  const response \= await fetch('/api/leads', {  
    method: 'POST',  
    headers: { 'Content-Type': 'application/json' },  
    body: JSON.stringify(leadData),  
  });  
  if (\!response.ok) throw new Error('Failed to submit lead.');  
  return response.json();  
};

#### **Next.js API Route (src/app/api/leads/route.ts)**

This server-side code will validate data and securely communicate with Supabase.

// Example: src/app/api/leads/route.ts  
import { createClient } from '@/lib/supabase-server';  
import { leadFormSchema } from '@/lib/validators';

export async function POST(req) {  
  try {  
    const body \= await req.json();  
    const parsedData \= leadFormSchema.parse(body); // Validate  
    const supabase \= createClient();  
    const { data, error } \= await supabase.from('leads').insert(\[parsedData\]).select().single();  
    if (error) throw error;  
    return new Response(JSON.stringify(data), { status: 201 });  
  } catch (error) {  
    return new Response(JSON.stringify({ error: 'Invalid request.' }), { status: 400 });  
  }  
}

### **6\. State Management**

* **Local State**: useState and useReducer for component-level state.  
* **Global State**: React Context for any state shared across the application.

### **7\. Form Handling**

* **Library**: React Hook Form for form state and submission.  
* **Validation**: Zod for defining validation schemas in src/lib/validators.ts.