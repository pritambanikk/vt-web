"use client"

import { Button } from "@/components/ui/button";
import { useFormContext } from "@/contexts/form-context";

export function OfficeLocation() {
  const { openForm } = useFormContext();

  return (
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
  );
} 