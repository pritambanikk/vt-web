"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormContext } from "@/contexts/form-context";
import { SimpleProcess } from "../homepage/simple-process";

export function LegalNoticeLanding() {
  const { openForm } = useFormContext();
  
  const features = [
    {
      title: "Payment Recovery",
      description: "Professional legal notices to recover outstanding payments from clients and customers",
      icon: "💰"
    },
    {
      title: "Contract Breaches", 
      description: "Legal notices for contract violations and breach of agreement situations",
      icon: "⚖️"
    },
    {
      title: "Compliance Issues",
      description: "Notices addressing regulatory compliance and legal requirement violations",
      icon: "📋"
    }
  ];

  const processSteps = [
    {
      icon: "₹",
      title: "Pay Advance",
      description: "Pay ₹400 advance to get connected with a legal professional"
    },
    {
      icon: "👨‍💼",
      title: "Connect & Consult",
      description: "Chat or call with qualified advocate to discuss your case"
    },
    {
      icon: "📝",
      title: "Notice Drafting",
      description: "Advocate drafts professional legal notice after document review"
    },
    {
      icon: "✅",
      title: "Approve & Send",
      description: "Review, approve and get signed notice posted with acknowledgment"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional <span className="text-primary/70">Legal Notices</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert legal notices for payment recovery, contract breaches, and compliance issues. 
            Protect your business rights with professionally drafted legal communications.
          </p>
          <div className="text-3xl font-bold text-primary mb-8">
            Starting from ₹999
          </div>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            onClick={() => openForm('legal-notice')}
          >
            Send Notice
          </Button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Legal Notice Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal notice solutions tailored to your specific business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4-Step Process */}
      <SimpleProcess
        title="Simple 4-Step Process"
        subtitle="Professional legal notice service designed for simplicity and effectiveness"
        steps={processSteps}
      />
<br />
      {/* Pricing & Value Proposition */}
      <section className="py-16 bg-card border rounded-lg">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Transparent Pricing
          </h2>
          <div className="text-4xl font-bold text-primary mb-8">
            Starting from ₹999
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Expert legal professionals</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Legally compliant notices</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Fast turnaround time</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Customized to your case</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">Ongoing support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              <span className="text-muted-foreground">No hidden charges</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Send Your Legal Notice?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with a professional legal notice today. Our experts will help you 
            draft the perfect notice for your situation.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => openForm('legal-notice')}
            >
              Send Notice
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-secondary px-8 py-3"
              onClick={() => {
                // Expand service details or show FAQ
                const serviceDetails = document.getElementById('service-details');
                if (serviceDetails) {
                  serviceDetails.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 