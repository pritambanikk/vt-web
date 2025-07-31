import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocumentDraftingLanding } from "@/components/features/landing-pages/document-drafting-landing";
import { FAQSection } from "@/components/shared/faq-section";
import { documentDraftingFAQs } from "@/data/faqs";
import { generateServiceMetadata } from "@/lib/seo";

export const metadata: Metadata = generateServiceMetadata('document-drafting');

export default function DocumentDraftingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Document Drafting", current: true }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <DocumentDraftingLanding />
      <FAQSection 
        faqs={documentDraftingFAQs}
        title="Document Drafting FAQs"
        subtitle="Common questions about our document drafting services"
      />
    </main>
  );
} 