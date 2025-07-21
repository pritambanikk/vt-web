"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormContext } from "@/contexts/form-context";

export default function PricingPage() {
  const { openForm } = useFormContext();

  const pricingPlans = [
    {
      title: "Legal Notice",
      price: "₹999",
      period: "per notice",
      description: "Professional legal notices for payment recovery and compliance",
      features: [
        "Payment recovery notices",
        "Contract breach notices", 
        "Compliance violation notices",
        "Professional drafting",
        "Signed and posted",
        "Acknowledgment tracking"
      ],
      cta: "Send Notice",
      serviceType: "legal-notice"
    },
    {
      title: "Legal Consultation",
      price: "₹1,999",
      period: "per session",
      description: "Expert legal consultation for business decisions and strategy",
      features: [
        "1-hour consultation session",
        "Business legal advice",
        "Contract review",
        "Compliance guidance",
        "Written summary",
        "Follow-up support"
      ],
      cta: "Book Consultation",
      serviceType: "consultation"
    },
    {
      title: "Document Drafting",
      price: "₹2,999",
      period: "per document",
      description: "Professional legal document drafting and review",
      features: [
        "Employment contracts",
        "Partnership agreements",
        "Business contracts",
        "Legal compliance review",
        "Unlimited revisions",
        "Final document delivery"
      ],
      cta: "Draft Document",
      serviceType: "document-drafting"
    },
    {
      title: "Corporate Retainer",
      price: "₹9,999",
      period: "per month",
      description: "Ongoing legal support for growing businesses",
      features: [
        "Unlimited consultations",
        "Contract management",
        "Compliance monitoring",
        "Monthly legal reports",
        "Priority support",
        "Dedicated legal team"
      ],
      cta: "Get Retainer",
      serviceType: "corporate-retainer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.title}
                  </CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {plan.period}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => openForm(plan.serviceType)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the service that fits your needs and get started with professional legal support today.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => openForm('consultation')}
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-secondary px-8 py-3"
              onClick={() => window.history.back()}
            >
              Back to Services
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
} 