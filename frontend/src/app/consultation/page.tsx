import type { Metadata } from "next";
import { ConsultationLanding } from "@/components/features/landing-pages/consultation-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { consultationFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('consultation');

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      <ConsultationLanding />
      <FAQSection 
        faqs={consultationFAQs}
        title="Legal Consultation FAQs"
        subtitle="Common questions about our consultation services"
      />
    </main>
  );
} 