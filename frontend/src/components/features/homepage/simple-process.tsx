interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface SimpleProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  className?: string;
}

export function SimpleProcess({ title, subtitle, steps, className = "" }: SimpleProcessProps) {
  return (
    <section className={`py-16 bg-card border rounded-lg ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              {step.icon}
            </div>
            <h3 className="text-md font-semibold mb-3 text-foreground">{step.title}</h3>
            <p className="text-muted-foreground text-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
} 