import type { Metadata } from "next";
import { LegalNoticeLanding } from "@/components/features/landing-pages/legal-notice-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { legalNoticeFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('legal-notice');

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      <LegalNoticeLanding />
      <FAQSection 
        faqs={legalNoticeFAQs}
        title="Legal Notice FAQs"
        subtitle="Common questions about our legal notice services"
      />
    </main>
  );
} 