import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, CreditCard, PartyPopper } from 'lucide-react';
import { formatAmount } from '@/lib/payment-config';

interface PaymentSuccessProps {
  leadId: string;
  paymentId: string;
  service: string;
  amount: number;
  customerName: string;
}

export const PaymentSuccess = ({ 
  leadId, 
  paymentId, 
  service, 
  amount, 
  customerName 
}: PaymentSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] max-w-md mx-auto p-2 sm:p-4"
    >
      {/* Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10] }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="mb-4"
      >
        <PartyPopper className="w-14 h-14 text-green-500" />
      </motion.div>

      <Card className="w-full shadow-lg">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-lg flex items-center justify-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-base font-medium">Thank you, {customerName}!</p>
          
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Payment Completed</span>
              </div>
              <p className="text-sm text-green-700">
                Amount: <span className="font-bold">{formatAmount(amount)}</span>
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Lead ID:</span> {leadId}
              </p>
              <p>
                <span className="font-medium">Payment ID:</span> {paymentId}
              </p>
              <p>
                <span className="font-medium">Service:</span> {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                Our team will review your request and reach out on WhatsApp soon.
                Your payment has been processed and your case is now prioritized.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}; 