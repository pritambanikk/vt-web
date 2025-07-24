"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useFormContext } from "@/contexts/form-context";

export function QuickActions() {
  const { openForm } = useFormContext();

  return (
    <>
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
    </>
  );
} 