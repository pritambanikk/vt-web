import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ConsultationLanding } from "@/components/features/landing-pages/consultation-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { consultationFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('consultation');

export default function ConsultationPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Consultation", current: true }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <ConsultationLanding />
      <FAQSection 
        faqs={consultationFAQs}
        title="Legal Consultation FAQs"
        subtitle="Common questions about our consultation services"
      />
    </main>
  );
} 