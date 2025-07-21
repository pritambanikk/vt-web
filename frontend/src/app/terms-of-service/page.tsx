"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of Vakil-Tech&apos;s legal services and website. 
            Please read them carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>

        {/* Terms Content */}
        <section className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Vakil-Tech&apos;s website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Services Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vakil-Tech provides legal services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Legal consultation and advice</li>
                  <li>Document drafting and review</li>
                  <li>Legal notice services</li>
                  <li>Corporate retainer services</li>
                  <li>Compliance and regulatory guidance</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All services are provided by qualified legal professionals registered with the Bar Council of India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Cooperate with our legal team</li>
                  <li>Pay fees as agreed upon</li>
                  <li>Maintain confidentiality of legal advice</li>
                  <li>Not use our services for illegal purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Fees and Payment</h3>
                    <p className="text-muted-foreground">
                      All fees are quoted in Indian Rupees (INR) and include applicable taxes. Payment is due as specified in your service agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Refund Policy</h3>
                    <p className="text-muted-foreground">
                      We offer refunds in accordance with our satisfaction guarantee. Refund requests must be made within 30 days of service completion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality of all client information and legal matters, subject to legal requirements and your consent. Our confidentiality obligations are governed by applicable laws and professional ethics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vakil-Tech&apos;s liability is limited to the extent permitted by law. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Indirect or consequential damages</li>
                  <li>Loss of profits or business opportunities</li>
                  <li>Damages arising from client&apos;s failure to follow advice</li>
                  <li>Third-party actions or decisions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All content on our website, including text, graphics, and software, is owned by Vakil-Tech and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Website Use</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Acceptable Use</h3>
                    <p className="text-muted-foreground">
                      You agree to use our website only for lawful purposes and in accordance with these terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Prohibited Activities</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Attempting to gain unauthorized access</li>
                      <li>Interfering with website functionality</li>
                      <li>Transmitting harmful code or content</li>
                      <li>Violating any applicable laws</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Any disputes arising from these terms or our services will be resolved through:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                  <li>Direct communication and negotiation</li>
                  <li>Mediation if required</li>
                  <li>Arbitration in Mumbai, India</li>
                  <li>Court proceedings as a last resort</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms are governed by the laws of India. Any legal proceedings will be subject to the jurisdiction of courts in Mumbai, Maharashtra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@vakiltech.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: Vakil Tech Legal Services, Mumbai, Maharashtra, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Questions About Our Terms?
          </h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re here to clarify any questions you may have about our terms of service.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
} 