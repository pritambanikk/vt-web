"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "@/contexts/form-context";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const { openForm } = useFormContext();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call us"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["contact@vakiltech.com", "support@vakiltech.com"],
      action: "Email us"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: ["Vakil Tech Legal Services", "Mumbai, Maharashtra, India"],
      action: "Get directions"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      action: "Book consultation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our legal services? We&apos;re here to help. 
            Reach out to us through any of the channels below or fill out the form.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-4 w-full"
                    onClick={() => {
                      if (info.title === "Phone") {
                        window.location.href = "tel:+919876543210";
                      } else if (info.title === "Email") {
                        window.location.href = "mailto:contact@vakiltech.com";
                      } else if (info.title === "Business Hours") {
                        openForm('consultation');
                      }
                    }}
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                <p className="text-center text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a free legal consultation with our experts.
                </p>
                <Button 
                  onClick={() => openForm('consultation')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-2">Get Quote</h3>
                <p className="text-muted-foreground mb-4">
                  Get a detailed quote for your legal service needs.
                </p>
                <Button 
                  onClick={() => openForm('consultation')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-2">Corporate Support</h3>
                <p className="text-muted-foreground mb-4">
                  Learn about our corporate retainer services.
                </p>
                <Button 
                  onClick={() => openForm('corporate-retainer')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Office Location */}
        <section className="bg-muted/30 rounded-lg p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Office
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Vakil Tech Legal Services</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>📍 Mumbai, Maharashtra, India</p>
                  <p>📞 +91 98765 43210</p>
                  <p>✉️ contact@vakiltech.com</p>
                  <p>🕒 Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h4 className="font-semibold mb-2">Visit Our Office</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule an in-person meeting at our Mumbai office.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => openForm('consultation')}
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 