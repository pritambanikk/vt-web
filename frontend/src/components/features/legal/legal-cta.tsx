"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LegalCTA() {
  return (
    <section className="text-center mt-16">
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Questions About Our Terms?
      </h2>
      <p className="text-muted-foreground mb-6">
        We&apos;re here to clarify any questions you may have about our terms of service.
      </p>
      <div className="space-x-4">
        <Link href="/contact">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Contact Us
          </Button>
        </Link>
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
        >
          Go Back
        </Button>
      </div>
    </section>
  );
} 