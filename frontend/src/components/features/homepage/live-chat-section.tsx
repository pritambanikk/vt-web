"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, User } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const features = [
  {
    icon: <MessageCircle className="text-green-500 w-5 h-5 mr-2" />, // chat
    text: "Monday to Friday, during business hours",
  },
  {
    icon: <Globe className="text-blue-500 w-5 h-5 mr-2" />, // globe
    text: "Live chat for all clients",
  },
  {
    icon: <User className="text-yellow-500 w-5 h-5 mr-2" />, // person
    text: "Imagine a lawyer available on text on demand?",
  },
];

const chatScenes = [
  [
    {
      from: "user",
      text: "Hello, Vakil.TECH I need help in Sending a Legal Notice.",
    },
    {
      from: "vakiltech",
      text: "You're connected to Vakil.TECH Live chat. Please share a time when our lawyers can call you to discuss?",
    },
    {
      from: "user",
      text: "I'm available in 15 mins!",
    },
    {
      from: "vakiltech",
      text: "Scheduling your callback at 6:30 PM today!",
    },
  ],
  [
    {
      from: "user",
      text: "Can I get legal advice for my startup?",
    },
    {
      from: "vakiltech",
      text: "Absolutely! Please share your query and our experts will assist you.",
    },
    {
      from: "user",
      text: "Thank you! I'll send the details now.",
    },
    {
      from: "vakiltech",
      text: "Received. We'll review and get back to you shortly!",
    },
  ],
  [
    {
      from: "user",
      text: "Is there a lawyer available for a quick call?",
    },
    {
      from: "vakiltech",
      text: "Yes! Please let us know your preferred time.",
    },
    {
      from: "user",
      text: "Now works for me.",
    },
    {
      from: "vakiltech",
      text: "Connecting you to a lawyer right away!",
    },
  ],
];

const vakiltechLogo = (
  <span className="inline-flex items-center font-bold text-lg text-primary">
    <span className="mr-1 text-gray-500">●</span>vakil<span className="rounded-md px-1">tech</span>
  </span>
);

export function LiveChatSection() {
  // Infinite animated chat scenes
  const [sceneIdx, setSceneIdx] = useState(0);
  const [visibleBubbles, setVisibleBubbles] = useState(1);
  const currentScene = chatScenes[sceneIdx];

  // Animate bubbles in sequence, then move to next scene
  useEffect(() => {
    if (visibleBubbles < currentScene.length) {
      const timeout = setTimeout(() => {
        setVisibleBubbles((v) => v + 1);
      }, 900);
      return () => clearTimeout(timeout);
    } else {
      // Pause, then go to next scene
      const pause = setTimeout(() => {
        setSceneIdx((idx) => (idx + 1) % chatScenes.length);
        setVisibleBubbles(1);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [visibleBubbles, currentScene]);

  // Reset visibleBubbles when scene changes
  useEffect(() => {
    setVisibleBubbles(1);
  }, [sceneIdx]);

  return (
    <section className="w-full bg-background py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start max-w-xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground"
          >
            A help desk agent will<br />answer your questions
          </motion.h2>
          <ul className="mb-10 space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={i}
                className="flex items-center text-lg text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {f.icon}
                {f.text}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="text-lg px-6 py-4 flex items-center gap-2 border-2 border-primary hover:bg-primary/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              Let&apos;s chat
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Chat */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-4 items-center w-full max-w-lg"
        >
          <div className="flex flex-col gap-4 w-full h-80 md:h-96 overflow-hidden justify-end px-2 md:px-4">
            <AnimatePresence initial={false}>
              {currentScene.slice(0, visibleBubbles).map((bubble, i) => (
                <motion.div
                  key={sceneIdx + '-' + i}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ type: "spring", stiffness: 400, damping: 32, duration: 0.5 }}
                  className={`flex items-end gap-3 ${bubble.from === "vakiltech" ? "justify-end" : "justify-start"}`}
                  style={{ pointerEvents: "none" }}
                >
                  {bubble.from === "user" && (
                    <span className="inline-block rounded-full bg-gray-200 p-1">
                      <User className="w-8 h-8 text-black" />
                    </span>
                  )}
                  <div
                    className={
                      bubble.from === "vakiltech"
                        ? "rounded-xl px-6 py-4 shadow-lg text-base max-w-xs font-sans font-semibold bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 text-gray-700 border border-secondary/60 drop-shadow-md"
                        : "rounded-xl px-6 py-4 shadow text-base max-w-xs font-sans font-medium bg-blue-50 text-gray-900 border border-blue-200/60 drop-shadow-sm"
                    }
                    style={{
                      boxShadow: bubble.from === "vakiltech"
                        ? "0 4px 24px 0 rgba(34,197,94,0.10), 0 1.5px 6px 0 rgba(34,197,94,0.08)"
                        : "0 2px 8px 0 rgba(59,130,246,0.06)",
                    }}
                  >
                    {bubble.from === "vakiltech" && (
                      <span className="inline-flex items-center gap-1 mb-1">
                        {vakiltechLogo}
                      </span>
                    )}
                    <span className="block leading-relaxed whitespace-pre-line">
                      {bubble.text}
                    </span>
                  </div>
                  {bubble.from === "vakiltech" && (
                    <span className="inline-block rounded-full bg-orange-100 p-1">
                      <span className="font-bold text-primary">VT</span>
                    </span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 