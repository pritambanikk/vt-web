"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>

        {/* Policy Content */}
        <section className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Fill out our contact forms</li>
                    <li>Book consultations</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request legal services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information We Collect Automatically</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Device information</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Provide and improve our legal services</li>
                  <li>Communicate with you about your cases</li>
                  <li>Send you updates and newsletters (with your consent)</li>
                  <li>Analyze website usage and improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist in our operations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-muted-foreground">
                  Essential cookies are required for website functionality and cannot be disabled.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 18. We do not knowingly collect personal information from children under 18. If you believe we have collected such information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@vakiltech.com</p>
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
            Questions About Your Privacy?
          </h2>
          <p className="text-muted-foreground mb-6">
                              We&apos;re here to help. Contact us if you have any concerns about your data.
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