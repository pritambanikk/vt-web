"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "@/contexts/form-context";
import { Users, Target, Shield, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  const { openForm } = useForm();

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

  const team = [
    {
      name: "Adv. Rajesh Kumar",
      role: "Founder & Managing Partner",
      expertise: "Corporate Law, Business Strategy",
      experience: "15+ years",
      description: "Former corporate lawyer with expertise in Indian business law and startup ecosystem."
    },
    {
      name: "Adv. Priya Sharma",
      role: "Head of Legal Operations",
      expertise: "Contract Law, Compliance",
      experience: "12+ years",
      description: "Specializes in contract drafting and regulatory compliance for Indian businesses."
    },
    {
      name: "Adv. Amit Patel",
      role: "Senior Legal Counsel",
      expertise: "Employment Law, HR",
      experience: "10+ years",
      description: "Expert in employment law and HR compliance for growing companies."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to democratize legal services for Indian SMEs"
    },
    {
      year: "2021",
      title: "First 50 Clients",
      description: "Reached our first milestone serving 50 small and medium businesses"
    },
    {
      year: "2022",
      title: "Digital Platform",
      description: "Launched our online platform for seamless legal service delivery"
    },
    {
      year: "2023",
      title: "150+ SMEs Served",
      description: "Expanded our reach and helped over 150 Indian businesses"
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Continuing to innovate and serve the evolving needs of Indian businesses"
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

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Vakil-Tech emerged from a simple observation: Indian small and 
                  medium businesses were struggling to access quality legal services. Traditional 
                  law firms were expensive, complex, and often intimidating for entrepreneurs.
                </p>
                <p>
                  We set out to change this by creating a platform that combines traditional 
                  legal expertise with modern technology. Our team of experienced lawyers 
                  understands the unique challenges Indian businesses face and provides 
                  solutions that actually work in our market.
                </p>
                <p>
                  Today, we&apos;ve helped over 150 Indian businesses navigate legal challenges, 
                  save on legal costs, and focus on what they do best - growing their business.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-4">Built for Indian Business Reality</h3>
                <p className="text-muted-foreground">
                  We understand the cultural nuances, regulatory environment, and business 
                  challenges that are unique to the Indian market.
                </p>
              </div>
            </div>
          </div>
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

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p><strong>Expertise:</strong> {member.expertise}</p>
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p className="text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card border rounded-lg p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of Indian entrepreneurs who trust Vakil-Tech for their legal needs. 
            Let&apos;s discuss how we can help your business grow.
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
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
} 