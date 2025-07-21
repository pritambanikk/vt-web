### **Vakil-Tech Product Requirements Document (PRD)**

| Date | Version | Description | Author |
| :---- | :---- | :---- | :---- |
| 13/07/2024 | 1.2 | Added Epic 3 for Go-Live Readiness | John, Product Manager |

### **1\. Goals and Background Context**

#### **Goals**

* To generate a high volume of qualified leads for all four key legal services.  
* To establish Vakil-Tech as a trusted, modern, and approachable brand in the Indian online legal space.  
* To provide a seamless, mobile-first user experience that converts visitors into clients.  
* To successfully integrate with a Supabase backend/CRM and a Razorpay payment gateway to create a complete lead-to-payment funnel.

#### **Background Context**

The Indian legal services market, especially in Tier 2/3 cities, is largely underserved by digital solutions. Potential clients perceive the legal process as intimidating, opaque, and expensive. Vakil-Tech's website aims to solve this by creating a user-friendly platform that is not just a directory, but a direct provider of legal services. By focusing on transparency, simplicity, and an empathetic "desi" brand voice, the website will build trust and make legal help more accessible to individuals and small businesses, while also catering to the needs of larger corporate clients.

### **2\. Requirements**

#### **Functional Requirements**

1. **FR1: Homepage Display**: The system must display a responsive homepage with sections for: Hero, How It Works, Services Overview, Trust Signals, and Why Choose Us.  
2. **FR2: Service Landing Pages**: The system must provide four unique, responsive landing pages for each key service.  
3. **FR3: Interactive Lead Form**: The system must provide an interactive, multi-step form to capture user's name, location, WhatsApp number, and selected service, with an optional final step for payment.  
4. **FR4: Alternative Lead Capture**: The system must provide a "Call Helpline" button (triggering a phone call) and a "Raise a Ticket" button (linking to a contact form or email).  
5. **FR5: Backend Integration**: The system must successfully transmit all captured lead data from the interactive form and "Raise a Ticket" option to the Supabase backend.  
6. **FR7: Payment Integration**: The system must integrate with Razorpay to generate and display a payment link for the advance fee as part of the form flow.  
7. **FR8: Analytics**: The system must integrate with an analytics service to track user behavior and key performance indicators.  
8. **FR9: SEO**: The system must have foundational SEO features, including dynamic meta tags and a sitemap.  
9. **FR10: Legal Pages**: The system must display pages for Terms of Service and Privacy Policy.

#### **Non-Functional Requirements**

1. **NFR1: Mobile-First Responsiveness**: All pages must be designed and implemented with a mobile-first approach, ensuring a seamless experience on smaller screens before scaling up to desktop.  
2. **NFR2: Performance**: The website must have fast load times, with a target of loading key content on mobile devices in under 3 seconds on a standard 4G connection.  
3. **NFR3: Security**: All user data transmitted via forms must be sent securely over HTTPS. The integration with Supabase and Razorpay must follow all recommended security best practices.  
4. **NFR4: Brand Consistency**: The website's design, colors, fonts, and tone of voice must be consistent across all pages, reflecting the "desi touch" brand identity.  
5. **NFR5: Browser Compatibility**: The website must function correctly on the latest versions of major web browsers, including Google Chrome, Safari, and Mozilla Firefox.

### **3\. User Interface Design Goals**

The UI will be clean, modern, and trustworthy, inspired by the visual style of 1mg.com. It will feature a warm off-white and cream color palette with a strong red accent for calls-to-action, ensuring a professional yet inviting user experience. The entire design will be mobile-first and adhere to WCAG AA accessibility standards.

### **4\. Technical Assumptions**

* **Repository**: A monorepo will be used.  
* **Frontend**: Built with **Next.js (React)**, **shadcn/ui**, and **Tailwind CSS**.  
* **Backend**: The **mcp supabase** instance will serve as the backend.  
* **Payment Gateway**: **Razorpay** will be integrated.

### **5\. Epic List**

* **Epic 1: Foundational UI & Core Pages**: Establish the complete visual and structural foundation of the website.  
* **Epic 2: Interactive Lead & Payment Form**: Build the complete, animated, multi-step lead generation form, integrate it with Supabase, and include the optional payment step with Razorpay.  
* **Epic 3: Go-Live Readiness**: Implement essential supporting features required for a successful production launch, including analytics, SEO, and legal pages.

### **Epic 1: Foundational UI & Core Pages**

**Goal**: To build the complete, visually styled, and fully responsive static shell of the website, including the homepage and all four service landing pages.

#### **Story 1.1: Project & UI Foundation Setup**

*As a developer, I want to set up a new Next.js project with Tailwind CSS and shadcn/ui configured, so that I have a clean, consistent, and scalable foundation for building the user interface.*

* **Acceptance Criteria**:  
  1. A new Next.js project is created and runs successfully.  
  2. Tailwind CSS is fully configured.  
  3. shadcn/ui is installed and themed with the project's red accent color.  
  4. The project structure is organized with dedicated folders for components, pages, and styles.  
  5. The primary font and color theme are configured globally.

#### **Story 1.2: Homepage Construction**

*As a user, I want to view a complete and visually appealing homepage, so that I can understand what Vakil-Tech offers and how to get started.*

* **Acceptance Criteria**:  
  1. The homepage is built at the root URL.  
  2. The page includes five distinct sections: Hero, How It Works, Services Overview, Trust Signals, and Why Choose Us.  
  3. All content is present as defined in the project brief.  
  4. The layout is fully responsive.

#### **Story 1.3: Service Landing Pages Construction**

*As a user, I want to view a dedicated landing page for each of the four services, so that I can get detailed information relevant to my specific legal need.*

* **Acceptance Criteria**:  
  1. Four new, responsive pages are created at unique URLs.  
  2. Each page is structured with a headline, service description, pricing, and a placeholder CTA.  
  3. The content is tailored to each specific service.  
  4. The design is consistent with the homepage branding.

#### **Story 1.4: Reusable Header & Footer**

*As a user, I want to see a consistent header and footer on all pages, so that I can easily navigate the site and find important information.*

* **Acceptance Criteria**:  
  1. A reusable Header component is created with the logo and navigation.  
  2. A reusable Footer component is created with links and contact info.  
  3. The Header and Footer are present on all pages.  
  4. Both components are fully responsive.

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

### **Epic 3: Go-Live Readiness**

**Goal**: To implement the essential analytics, SEO, and legal functionalities required to successfully launch, monitor, and grow the website.

#### **Story 3.1: Analytics Integration**

*As a business owner, I want to have web analytics integrated into the website, so that I can track user behavior and measure the success of my lead generation efforts.*

* **Acceptance Criteria**:  
  1. An analytics provider (e.g., Google Analytics 4 or Vercel Analytics) is chosen and configured.  
  2. The analytics tracking script is correctly implemented and active on all pages.  
  3. Key conversion events (e.g., "Lead Form Submitted," "Advance Paid") are tracked as goals.  
  4. Page views for all main pages are being correctly recorded.

#### **Story 3.2: Foundational SEO Setup**

*As a business owner, I want basic SEO features implemented on the website, so that search engines can effectively crawl and rank my pages, driving organic traffic.*

* **Acceptance Criteria**:  
  1. Each page has a unique and descriptive \<title\> tag.  
  2. Each page has a unique and compelling meta description tag.  
  3. A sitemap.xml file is automatically generated.  
  4. A robots.txt file is configured.  
  5. Next.js metadata API is used to manage all SEO-related tags.

#### **Story 3.3: Legal Pages Creation**

*As a user, I want to be able to access the Terms of Service and Privacy Policy, so that I can understand the rules and how my data is handled.*

* **Acceptance Criteria**:  
  1. A new page is created for "Terms of Service" at /terms-of-service.  
  2. A new page is created for "Privacy Policy" at /privacy-policy.  
  3. Both pages are populated with placeholder legal text.  
  4. The pages are styled consistently with the rest of the website.  
  5. Links to these pages are present in the website's footer.