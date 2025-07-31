import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Target, Shield, Zap, Heart } from "lucide-react";
import { AboutCTA } from "@/components/features/about/about-cta";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata('about');

export default function AboutPage() {

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on outcomes that matter to your business success, not just legal processes."
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
      description: "Your success is our priority. We understand Indian business culture and challenges."
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Vakil-Tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to make professional legal services accessible, affordable, 
            and effective for Indian businesses. No more traditional law firm complexity.
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
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">SMEs Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">₹50L+</div>
                <div className="text-muted-foreground">Legal Fees Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Expert Lawyers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-muted-foreground">Customer Rating</div>
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