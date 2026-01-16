"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is EcoSync and how does it work?",
    answer:
      "EcoSync is Rwanda's first AI-powered sustainability platform that transforms students into eco-leaders. It combines three intelligent modules: Smart Solar & Energy Advisor for household energy optimization, Adaptive Eco-Challenge Engine for personalized sustainability missions, and Vision-Based Verification to track and verify your environmental impact through your smartphone camera.",
  },
  {
    question: "Who can use EcoSync?",
    answer:
      "EcoSync is designed for Rwandan students, their families, and educational institutions. Students lead the eco-actions while families benefit from energy savings and practical sustainability guidance. Schools can track district-level progress and integrate EcoSync into their curriculum through partnerships with MINEDUC.",
  },
  {
    question: "Do I need special equipment to use EcoSync?",
    answer:
      "No! EcoSync is a mobile-first platform that works with just your smartphone. You don't need any additional hardware for solar monitoring, energy tracking, or action verification. Simply download the app and start your eco-journey.",
  },
  {
    question: "How does EcoSync verify my eco-actions?",
    answer:
      "EcoSync uses advanced AI-powered image recognition technology. Simply take a photo of your completed eco-action (like sorted waste, solar panel usage, or water conservation) with your smartphone camera. Our AI instantly verifies the action and converts it into quantifiable metrics like kWh saved, liters preserved, or waste diverted.",
  },
  {
    question: "What rewards can I earn on EcoSync?",
    answer:
      "You earn points, badges, and school rankings for completing verified sustainability missions. Your achievements contribute to your school's standing in nationwide eco-competitions. Beyond digital rewards, you're making measurable impact toward Rwanda's Vision 2050 and helping your family save on electricity bills.",
  },
  {
    question: "How does EcoSync help my family save money?",
    answer:
      "Our Smart Solar & Energy Advisor provides AI-driven insights to lower electricity bills by optimizing solar usage, preventing prepaid meter outages with smart alerts, and suggesting the best times to use appliances during peak solar hours. Families typically see noticeable savings within the first month.",
  },
  {
    question: "Is my data secure on EcoSync?",
    answer:
      "Absolutely. We use industry-standard encryption to protect your personal information and energy data. Your verified eco-actions contribute to anonymized, aggregated reports for national partners like REG, REMA, and MINEDUC, but your individual data remains private and secure.",
  },
  {
    question: "When will EcoSync be available in my district?",
    answer:
      "We're launching our pilot program in 2026 across five schools in Gasabo District. Based on the success of the pilot, we plan to expand nationwide from 2027-2030 through partnerships with REG, REMA, REB, and MINEDUC, reaching all 30 districts of Rwanda.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-charcoal lg:py-24">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-eco-green/8 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-tech-blue/8 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun-yellow/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-20 w-40">
              <Image
                src="/assets/logo.png"
                alt="EcoSync Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-eco-green/20 bg-eco-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-eco-green"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="mb-4 text-4xl font-bold text-text-primary sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Got questions? We&apos;ve got answers.
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Everything you need to know about EcoSync and how it transforms
            daily actions into measurable environmental impact.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="grid gap-4 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="group w-full rounded-2xl border border-white/40 bg-white/60 backdrop-blur transition-all hover:border-eco-green/30 hover:bg-white/80 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-eco-green/20 dark:hover:bg-white/10"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="text-left text-base font-semibold text-text-primary sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-eco-green/10 text-eco-green transition-colors group-hover:bg-eco-green group-hover:text-white"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-eco-green/10 px-6 pb-5 pt-4">
                        <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-4 text-base text-text-secondary">
            Still have questions?
          </p>
          <motion.a
            href="mailto:info@ecosync.rw"
            className="inline-flex items-center gap-2 rounded-full border border-eco-green/30 bg-eco-green/5 px-6 py-3 text-sm font-semibold text-eco-green transition-all hover:bg-eco-green hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch with us
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
