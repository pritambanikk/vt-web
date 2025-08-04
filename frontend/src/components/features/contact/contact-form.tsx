"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // FormSubmit will handle the email delivery
      const form = e.target as HTMLFormElement;
      form.submit();
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Show success toast notification
      toast.success("Thank you for your message! We'll get back to you within 24 hours.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#10b981",
          color: "#ffffff",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error sending your message. Please try again.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#ffffff",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
        <p className="text-center text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        <form 
          className="space-y-6" 
          onSubmit={handleSubmit}
          target="_blank" 
          action="https://formsubmit.co/help@vakiltech.in" 
          method="POST"
        >
          {/* Hidden fields for FormSubmit configuration */}
          <input type="hidden" name="_subject" value="New Contact Form Submission - VakilTech" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="Enter your first name" 
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Enter your last name" 
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email"
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone"
              placeholder="Enter your phone number" 
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              name="subject"
              placeholder="What is this regarding?" 
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="Tell us more about your inquiry..."
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 