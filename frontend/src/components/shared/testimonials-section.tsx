"use client";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  showBadge?: boolean;
  badgeText?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    text: "Vakil-Tech helped me get my FSSAI license in just 2 weeks. Their team understood exactly what a small restaurant owner needs. Saved me ₹25,000 in legal fees!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Restaurant Owner, Mumbai",
  },
  {
    text: "The employment agreement templates were perfect for our 15-person team. Clear, legally sound, and in plain English. Exactly what a startup needs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Rajesh Kumar",
    role: "Tech Startup Founder, Bangalore",
  },
  {
    text: "Their legal notice service is a game-changer. Got a ₹50,000 payment recovered in 3 weeks. Professional, affordable, and they speak my language.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Anita Patel",
    role: "E-commerce Business Owner, Delhi",
  },
  {
    text: "The consultation service exceeded my expectations. Clear advice on GST compliance saved us from potential penalties. Highly recommend for Indian businesses.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Amit Singh",
    role: "Manufacturing Business Owner, Pune",
  },
  {
    text: "Corporate retainer service is worth every rupee. Monthly legal support has given us confidence to expand our business without legal worries.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Meera Reddy",
    role: "CEO, Hyderabad Tech Solutions",
  },
  {
    text: "Document drafting service was excellent. Our partnership agreement was comprehensive and covered all Indian legal requirements. Very professional team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Vikram Malhotra",
    role: "Co-founder, Gurgaon Startup",
  },
  {
    text: "The transparency in pricing is refreshing. No hidden charges, no surprises. They delivered exactly what was promised at the quoted price.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Kavita Desai",
    role: "Small Business Owner, Ahmedabad",
  },
  {
    text: "Their understanding of Indian business culture and local regulations is outstanding. They speak our language and understand our challenges.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Rahul Verma",
    role: "Operations Manager, Chennai",
  },
  {
    text: "Quick response times and professional service. Got my legal notice drafted and sent within 24 hours. Highly efficient and cost-effective.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Sunita Iyer",
    role: "Freelance Consultant, Kochi",
  },
];

export const TestimonialsSection = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title = "What our users say",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  subtitle = "See what our customers have to say about us.",
  testimonials = defaultTestimonials,
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showBadge = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  badgeText = "Testimonials"
}: TestimonialsSectionProps) => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className={`bg-transparent my-20 relative ${className}`}>
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 