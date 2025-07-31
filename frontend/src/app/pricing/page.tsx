import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PricingCards } from "@/components/features/pricing/pricing-cards";
import { PricingCTA } from "@/components/features/pricing/pricing-cta";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata('pricing');

export default function PricingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Pricing", current: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the legal service that fits your business needs 
            with our transparent, upfront pricing structure.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <PricingCards />
        </section>

        {/* Value Proposition */}
        <section className="bg-muted/30 rounded-lg p-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Why Choose Vakil-Tech Pricing?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
                <p className="text-muted-foreground">All prices include GST. No surprise fees or additional charges.</p>
              </div>
              <div>
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">Expert Legal Professionals</h3>
                <p className="text-muted-foreground">Bar Council registered lawyers with Indian business expertise.</p>
              </div>
              <div>
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Results-Focused</h3>
                <p className="text-muted-foreground">We focus on outcomes that matter to your business success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Do you offer payment plans?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment options for corporate retainers and larger projects. 
                Contact us to discuss payment arrangements.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                What if I&apos;m not satisfied with the service?
              </h3>
              <p className="text-muted-foreground">
                We offer a satisfaction guarantee. If you&apos;re not completely satisfied, 
                we&apos;ll work to make it right or provide a refund.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Are there any additional costs?
              </h3>
              <p className="text-muted-foreground">
                No hidden costs. All prices include GST and any applicable taxes. 
                We&apos;ll clearly communicate any additional charges upfront.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <PricingCTA />
      </div>
    </div>
  );
} 