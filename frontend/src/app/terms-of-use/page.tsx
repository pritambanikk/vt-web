import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LegalCTA } from "@/components/features/legal/legal-cta";
import { generateLegalMetadata } from "@/lib/seo";

export const metadata: Metadata = generateLegalMetadata('terms-of-use');

export default function TermsOfUsePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Use", current: true }
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
            Terms of Use
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DISCLAIMER OF USE OF VAKILTECH.IN - Important information about our role as a legal services platform
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: December 2024
          </p>
        </section>

        {/* Terms Content */}
        <section className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-muted-foreground mb-6">
              Welcome to Vakil.TECH&apos;s Disclaimer page. We want to emphasize that Vakil.TECH is a platform that facilitates 
              communication and connections between lawyers and clients. We are not a provider of legal services. Below, 
              we provide detailed information regarding our role and the limitations of our services:
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="not-agents">
              <AccordionTrigger className="text-left">
                1. We&apos;re Not Agents of Lawyers
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  vakiltech.in is not an agent of lawyers. Our primary function is to facilitate communication between 
                  legal professionals and potential clients. It is important to understand that any electronic communication 
                  sent to vakiltech.in alone will not establish a lawyer-client relationship between the user and vakiltech.in. 
                  We expressly deny that such a relationship exists through our platform.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-legal-advice">
              <AccordionTrigger className="text-left">
                2. We Do Not Provide Legal Advice
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  At vakiltech.in, we do not provide legal advice or consultation. It is only when you expressly purchase 
                  one of our services that we connect you to a licensed advocate who can provide legal advice and guidance. 
                  None of the communications you receive through email, WhatsApp, or phone from vakiltech.in should be 
                  considered as legal advice.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="not-advocates">
              <AccordionTrigger className="text-left">
                3. We Are Not Advocates
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  It is crucial to note that neither vakiltech.in nor any of its subsidiaries or employees are advocates. 
                  We are not a law firm, and our core mission does not involve offering legal advice. Therefore, nothing 
                  on our website or in the materials sent to you through our communication channels should be construed 
                  as legal advice.
                </p>
                <p className="text-muted-foreground mt-4">
                  Our platform serves as a valuable tool to help you connect with legal professionals and access legal 
                  services, but we are not a substitute for the advice and services of a qualified attorney and or lawyers 
                  but only a facilitator that connects you with qualified attorneys and or lawyers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="important-considerations">
              <AccordionTrigger className="text-left">
                4. Important Considerations
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The information provided on our website, including the &quot;FAQs&quot; section, does not constitute legal advice. 
                    These are frequently asked questions about legal documents and services and are intended for informational 
                    purposes only.
                  </p>
                  <p className="text-muted-foreground">
                    Users are advised to consult their appointed lawyers for specialized guidance on any legal documents 
                    or services listed on our website.
                  </p>
                  <p className="text-muted-foreground">
                    Legal matters are complex, and the choice of a lawyer is a critical decision. Please exercise due 
                    diligence and discretion when selecting a legal professional. If your appointed attorney and or lawyers 
                    is automatically selected, kindly contact the helpdesk or vakiltech.in if you wish to change or select 
                    from a range of professionals.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="platform-role">
              <AccordionTrigger className="text-left">
                5. Our Platform Role
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  vakiltech.in is committed to providing a platform for connecting individuals with legal professionals. 
                  Our role is to facilitate this connection and communication. We want our users to understand the limitations 
                  of our services, and we encourage you to seek qualified legal counsel for any legal advice or representation 
                  you may require.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service-limitations">
              <AccordionTrigger className="text-left">
                6. Service Limitations
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Communication Channels</h3>
                    <p className="text-muted-foreground">
                      All communications through email, WhatsApp, or phone from vakiltech.in are for coordination and 
                      facilitation purposes only. These communications should not be interpreted as legal advice or 
                      consultation services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Website Content</h3>
                    <p className="text-muted-foreground">
                      All content on our website, including FAQs, service descriptions, and informational materials, 
                      is provided for general informational purposes only and should not be considered as legal advice 
                      or professional consultation.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-understanding">
              <AccordionTrigger className="text-left">
                7. User Understanding and Acknowledgment
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  By using our platform, you acknowledge and understand that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Vakiltech.in is a facilitation platform, not a legal service provider</li>
                  <li>No lawyer-client relationship is established with Vakiltech.in</li>
                  <li>Legal advice is only provided by connected legal professionals</li>
                  <li>Website content is informational and not legal advice</li>
                  <li>You are responsible for selecting appropriate legal professionals</li>
                  <li>You should exercise due diligence in legal matters</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact-support">
              <AccordionTrigger className="text-left">
                8. Contact and Support
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Please feel free to contact us if you have any questions or concerns about our services, and we will 
                  be happy to assist you.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: support@vakiltech.in</p>
                  <p>Phone: +91 7047683995</p>
                  <p>Helpdesk: Available through our platform</p>
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