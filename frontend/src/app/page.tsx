"use client"

import { HeroSection } from "@/components/features/homepage/hero-section";
import { HowItWorksSection } from "@/components/features/homepage/how-it-works";
import { ServicesOverviewSection } from "@/components/features/homepage/services-overview";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { WhyChooseUsSection } from "@/components/features/homepage/why-choose-us";
import { LiveChatSection } from "@/components/features/homepage/live-chat-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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
    </div>
  );
}
