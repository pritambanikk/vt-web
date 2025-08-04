import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { LegalNoticeLanding } from "@/components/features/landing-pages/legal-notice-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { legalNoticeFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('legal-notice');

export default function LegalNoticePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", current: true }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <LegalNoticeLanding />
      <FAQSection 
        faqs={legalNoticeFAQs}
        title="Legal Notice FAQs"
        subtitle="Common questions about our legal notice services"
      />
    </main>
  );
} 