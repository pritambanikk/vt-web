"use client"

import { createContext, useContext, ReactNode } from 'react';

interface FormContextType {
  openForm: (service?: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
  openForm: (service?: string) => void;
}

export function FormProvider({ children, openForm }: FormProviderProps) {
  return (
    <FormContext.Provider value={{ openForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
} 