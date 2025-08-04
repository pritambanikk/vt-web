import type { Metadata } from "next";
import { HeroSection } from "@/components/features/homepage/hero-section";
import { HowItWorksSection } from "@/components/features/homepage/how-it-works";
import { ServicesOverviewSection } from "@/components/features/homepage/services-overview";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { WhyChooseUsSection } from "@/components/features/homepage/why-choose-us";
import { LiveChatSection } from "@/components/features/homepage/live-chat-section";
import { FAQSection } from "@/components/shared/faq-section";
import { homepageFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Vakil Tech - Professional Legal Services & Consultation",
  description: "Get expert legal consultation, document drafting, corporate retainers, and legal notices from experienced lawyers. Professional legal services for all your needs.",
  keywords: ["legal services", "legal consultation", "document drafting", "corporate legal", "legal notices", "lawyer", "legal advice", "legal expert"],
  openGraph: {
    title: "Vakil Tech - Professional Legal Services & Consultation",
    description: "Get expert legal consultation, document drafting, corporate retainers, and legal notices from experienced lawyers. Professional legal services for all your needs.",
    url: "/",
    type: "website",
    siteName: "Vakil Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakil Tech - Professional Legal Services & Consultation",
    description: "Get expert legal consultation, document drafting, corporate retainers, and legal notices from experienced lawyers. Professional legal services for all your needs.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background max-w-screen-2xl mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Services Overview Section */}
      <ServicesOverviewSection />
      
      {/* Trust Signals Section */}
      <TrustSignalsSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Live Chat Section */}
      <LiveChatSection />
      
      {/* FAQ Section */}
      <FAQSection 
        faqs={homepageFAQs}
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our legal services"
      />
    </div>
  );
}
