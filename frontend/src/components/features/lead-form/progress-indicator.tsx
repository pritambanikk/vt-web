"use client"

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { progressVariants } from '@/lib/animations';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{ id: number; title: string; description: string }>;
}

export const ProgressIndicator = ({ currentStep, totalSteps, steps }: ProgressIndicatorProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4">
      {/* Progress Bar */}
      <div className="relative">
        <Progress 
          value={progressPercentage} 
          className="h-2"
        />
        <motion.div
          className="absolute inset-0 bg-primary rounded-full"
          initial="hidden"
          animate="visible"
          variants={progressVariants}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col items-center space-y-2 ${
              index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                index + 1 <= currentStep
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-muted-foreground'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {index + 1 < currentStep ? (
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="20,6 9,17 4,12" />
                </motion.svg>
              ) : (
                index + 1
              )}
            </motion.div>
            <div className="text-center">
              <p className="text-xs font-medium hidden sm:block">{step.title}</p>
              <p className="text-xs text-muted-foreground hidden lg:block">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 