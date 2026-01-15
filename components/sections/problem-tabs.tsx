"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [
  {
    id: "engagement",
    title: "Low engagement",
    summary:
      "Students struggle to translate sustainability lessons into daily action; families lack clear, tailored guidance.",
    bullets: [
      "Eco-missions feel generic and disconnected from home realities.",
      "No feedback loop showing if actions matter for schools or communities.",
      "Prepaid outages and poor solar utilization discourage continued effort.",
    ],
  },
  {
    id: "verification",
    title: "No trusted proof",
    summary:
      "Impact data is anecdotal—ministries, schools, and partners can’t verify or aggregate youth-led outcomes.",
    bullets: [
      "Photos and logs sit in silos; nothing ties them to real metrics.",
      "Stakeholders can’t see district-level progress in real time.",
      "Incentives weaken without credible proof of action.",
    ],
  },
  {
    id: "fragmentation",
    title: "Fragmented tools",
    summary:
      "Families juggle prepaid meters, solar guesswork, and scattered campaigns with no unified, AI-guided experience.",
    bullets: [
      "No predictive alerts to avoid outages or optimize solar hours.",
      "Campaigns from REG/REMA/MINEDUC don’t reach households contextually.",
      "Young users miss a gamified path that aligns home actions with national goals.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

const problemImages = [
  {
    src: "/assets/images/problem/i4.jpg",
    alt: "Stormy night, vulnerable home",
  },
  { src: "/assets/images/problem/i2.png", alt: "Solar system diagram" },
  { src: "/assets/images/problem/i3.jpg", alt: "Grid-connected solar rooftop" },
  { src: "/assets/images/problem/i1.jpg", alt: "House with solar resilience" },
];

export function ProblemTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % problemImages.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#f4fbf6] via-white to-[#eaf5ff] px-6 py-16 dark:from-charcoal dark:via-charcoal/90 dark:to-charcoal/85">
      <div className="absolute -left-10 top-6 h-48 w-48 rounded-full bg-eco-green/18 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-tech-blue/14 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <motion.div
          className="relative flex-1 overflow-visible rounded-3xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-full min-h-[520px]">
            {problemImages.map((img, idx) => {
              const offset =
                (idx - slide + problemImages.length) % problemImages.length;
              const depth = Math.min(offset, 3);
              const isTop = offset === 0;
              return (
                <motion.div
                  key={img.src}
                  className="absolute inset-0"
                  style={{ zIndex: problemImages.length - offset }}
                  animate={{
                    x: depth * -24,
                    y: depth * -18,
                    rotate: depth * 6,
                    scale: 1 - depth * 0.06,
                    opacity: isTop ? 1 : 0.82 - depth * 0.07,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <div className="absolute inset-0 rounded-3xl border border-white/40 bg-white/40 shadow-2xl shadow-black/25 backdrop-blur">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover rounded-3xl"
                      priority={idx === slide}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-3">
            {problemImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2 w-6 rounded-full transition ${
                  slide === idx ? "bg-eco-green" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 space-y-6 min-h-[520px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-eco-green/30 bg-eco-green/10 px-3 py-1 text-xs font-semibold text-eco-green">
            Why EcoSync matters
          </div>
          <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">
            The gap between eco-intent and eco-impact.
          </h2>
          <p className="text-base text-text-secondary">
            Rwanda’s youth and families want to act, but lack personalized
            guidance, trusted proof, and a unified experience that ties home
            effort to national goals. EcoSync closes this gap with AI-powered
            missions, predictive energy support, and verifiable impact data.
          </p>

          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/40 bg-white/60 p-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  active === tab.id
                    ? "bg-eco-green text-charcoal shadow shadow-eco-green/30"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-3 rounded-2xl border border-dim-gray/30 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-base font-semibold text-text-primary">
                {activeTab.summary}
              </p>
              <ul className="space-y-2 text-sm text-text-secondary">
                {activeTab.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-eco-green" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
