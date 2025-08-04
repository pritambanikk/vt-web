import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Target, Shield, Zap, Heart } from "lucide-react";
import { AboutCTA } from "@/components/features/about/about-cta";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata('about');

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", current: true }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on outcomes that matter to you; the vakiltech way."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "Complete transparency in pricing and processes, building trust with every interaction."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Modern legal solutions that leverage technology while maintaining traditional expertise."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Centric",
      description: "We truely understand your problems and your success is our priority."
    }
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
            About vakiltech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to make professional legal services accessible, affordable, 
            and effective for individual and businesses in India. No more legal complexity.
          </p>
        </section>

 

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15000+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">₹2Cr+</div>
                <div className="text-muted-foreground">Legal Fees Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Avg Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AboutCTA />
      </div>
    </div>
  );
} 