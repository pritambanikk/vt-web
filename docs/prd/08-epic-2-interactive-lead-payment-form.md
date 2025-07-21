### **Epic 2: Interactive Lead & Payment Form**

**Goal**: To implement the complete, animated, multi-step lead capture form, connect it to Supabase, and integrate an optional Razorpay payment flow.

#### **Story 2.1: Supabase Backend Setup**

*As a developer, I want to set up the **mcp supabase** project and define the database schema for leads, so that I have a secure and structured backend ready to receive data.*

* **Acceptance Criteria**:
  1. The **mcp supabase** project is provisioned.
  2. A "leads" table is created with columns for name, location, WhatsApp number, service, timestamp, and payment status.
  3. Row Level Security (RLS) is enabled.
  4. Supabase credentials are stored as environment variables in the Next.js project.

#### **Story 2.2: Animated Multi-Step Form UI**

*As a user, I want to interact with a simple, nicely animated, multi-step form to submit my legal query, so that the process feels modern, easy, and not overwhelming.*

* **Acceptance Criteria**:
  1. A multi-step form component is built using shadcn/ui.
  2. Transitions between form steps are smooth and animated.
  3. The form has clear steps for entering personal details and selecting a service.
  4. The form includes client-side validation.
  5. The final step presents a clear choice: "Submit and Pay Advance" or "Submit without Payment".

#### **Story 2.3: Form Submission to Supabase**

*As a developer, I want to connect the interactive lead form to the Supabase backend, so that when a user submits their details, the data is saved to the CRM before the payment step.*

* **Acceptance Criteria**:
  1. When the user proceeds from the details step, a function sends the form data to the Supabase "leads" table.
  2. The lead is created in Supabase with an initial status (e.g., "Pending Payment").
  3. Proper error handling is implemented.
  4. The user is seamlessly transitioned to the final, optional payment step.

#### **Story 2.4: Optional Razorpay Payment Integration**

*As a user who chooses to pay, I want to complete the advance payment via Razorpay within the form, so that my query is initialized immediately.*

* **Acceptance Criteria**:
  1. When the user clicks "Submit and Pay Advance," the Razorpay payment modal is triggered.
  2. The payment amount is correctly calculated.
  3. Upon successful payment, a callback function updates the lead's status in the Supabase table to "Paid".
  4. The user is shown a final success message confirming both their submission and payment.
