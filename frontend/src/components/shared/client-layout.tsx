"use client"

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/ui/footer";
import { FormProvider } from "@/contexts/form-context";
import { LeadFormModal } from "@/components/features/lead-form";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <FormProvider>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Form Modal */}
      <LeadFormModal />
    </FormProvider>
  );
} 