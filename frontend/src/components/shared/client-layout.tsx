"use client"

import { useState } from "react";
import { Header } from "@/components/shared/header";
import { LeadFormModal } from "@/components/features/lead-form";
import { LeadFormData } from "@/types/lead-form";
import { FormProvider } from "@/contexts/form-context";
import { Footer } from "@/components/ui/footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenForm = (service?: string) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedService(undefined);
  };

  const handleFormComplete = (data: LeadFormData) => {
    console.log('Form completed:', data);
    // Here you would typically send the data to your API
    // For now, we'll just log it
  };

  return (
    <FormProvider openForm={handleOpenForm}>
      {/* Header */}
      <Header onOpenForm={handleOpenForm} />

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onComplete={handleFormComplete}
        initialService={selectedService}
      />
    </FormProvider>
  );
} 