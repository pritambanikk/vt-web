import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CorporateRetainerLanding } from "@/components/features/landing-pages/corporate-retainer-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { corporateRetainerFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('corporate-retainer');

export default function CorporateRetainerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Corporate Retainer", current: true }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <CorporateRetainerLanding />
      <FAQSection 
        faqs={corporateRetainerFAQs}
        title="Corporate Retainer FAQs"
        subtitle="Common questions about our retainer services"
      />
    </main>
  );
} 