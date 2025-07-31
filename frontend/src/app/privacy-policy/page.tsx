import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LegalCTA } from "@/components/features/legal/legal-cta";
import { generateLegalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateLegalMetadata('privacy-policy');

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString();
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", current: true }
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
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {currentDate}
          </p>
        </section>

        {/* Policy Content */}
        <section className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="information-collection">
              <AccordionTrigger className="text-left">
                Information We Collect
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We may collect various types of information from users of our website and services, including:
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground mb-2">
                      When you register or use our services, we may collect personal information such as your name, email address, phone number, and other contact details.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Billing Information</h3>
                    <p className="text-muted-foreground mb-2">
                      If you make payments through our website, we may collect billing and payment information, including credit card details.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">User-Generated Content</h3>
                    <p className="text-muted-foreground mb-2">
                      Information that you provide while using our services, such as messages, comments, and documents.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Device Information</h3>
                    <p className="text-muted-foreground mb-2">
                      We may collect information about the device you use to access our services, including device type, browser, IP address, and location data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Usage Information</h3>
                    <p className="text-muted-foreground mb-2">
                      We collect information about your interactions with our website, such as pages visited, features used, and the date and time of visits.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cookies and Tracking Technologies</h3>
                    <p className="text-muted-foreground">
                      We use cookies and similar technologies to collect data about your online behavior and preferences. You can manage your cookie preferences through your browser settings.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-we-use">
              <AccordionTrigger className="text-left">
                How We Use Your Information
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>To Provide Services:</strong> To offer our legal services, connect clients with legal professionals, and facilitate communication.</li>
                  <li><strong>Communication:</strong> To communicate with you, respond to inquiries, and provide updates about our services.</li>
                  <li><strong>Billing and Payments:</strong> To process payments and maintain billing records.</li>
                  <li><strong>User Experience:</strong> To personalize your experience and improve our website and services.</li>
                  <li><strong>Legal Obligations:</strong> To comply with legal and regulatory requirements.</li>
                  <li><strong>Marketing:</strong> With your consent, we may use your contact information for marketing purposes. You can opt out at any time.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disclosure">
              <AccordionTrigger className="text-left">
                Disclosure of Your Information
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Legal Professionals:</strong> We may share your information with legal professionals when you seek their services through our platform.</li>
                  <li><strong>Service Providers:</strong> We may use third-party service providers to assist with our operations, and we may share your information with them.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information to comply with legal obligations or respond to lawful requests, including government authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our assets, your information may be transferred as part of the transaction.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-security">
              <AccordionTrigger className="text-left">
                Data Security
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is entirely secure. Therefore, we cannot guarantee absolute security.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="your-choices">
              <AccordionTrigger className="text-left">
                Your Choices
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  You have certain choices regarding your information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li><strong>Access and Update:</strong> You can access and update your personal information by logging into your account.</li>
                  <li><strong>Marketing Communications:</strong> You can opt out of marketing communications at any time by following the unsubscribe instructions in the messages or by contacting us.</li>
                  <li><strong>Cookies:</strong> You can manage cookie preferences through your browser settings.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="children-privacy">
              <AccordionTrigger className="text-left">
                Children&apos;s Privacy
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect information from children. If you are a parent or guardian and believe your child has provided us with information, please contact us, and we will take steps to delete the information.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="changes-policy">
              <AccordionTrigger className="text-left">
                Changes to this Policy
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy to reflect changes in our practices. We will post the revised policy with the effective date on this page.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact-us">
              <AccordionTrigger className="text-left">
                Contact Us
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> help@vakil.tech</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <LegalCTA />
      </div>
    </div>
  );
} 