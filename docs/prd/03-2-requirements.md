### **2. Requirements**

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
