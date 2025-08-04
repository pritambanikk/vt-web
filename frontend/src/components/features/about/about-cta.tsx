"use client"

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/contexts/form-context";

export function AboutCTA() {
  const { openForm } = useFormContext();

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-foreground">
        Ready to Work With Us?
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join hundreds of Indian who trust vakiltech for all their legal needs. 
        Let&apos;s discuss how we can help you.
      </p>
      <div className="space-x-4">
        {/* <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          onClick={() => openForm('consultation')}
        >
          Join Network Lawyers
        </Button> */}
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
  );
} 