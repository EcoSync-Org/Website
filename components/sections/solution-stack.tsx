"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Compass, ShieldCheck } from "lucide-react";

const solutionImages = [
  {
    src: "/assets/images/solution/img2.jpg",
    alt: "Smart meter and inverter flow",
  },
  { src: "/assets/images/solution/img3.jpg", alt: "Solar rooftop at sunset" },
  {
    src: "/assets/images/solution/img5.jpg",
    alt: "Family with smart energy insights",
  },
  { src: "/assets/images/solution/img6.jpg", alt: "Modern solar home" },
];

const highlights = [
  {
    icon: Zap,
    title: "Predictive energy intelligence",
    text: "Avoid outages, shift usage to solar hours, and maximize every kWh.",
  },
  {
    icon: Compass,
    title: "Adaptive eco-missions",
    text: "AI-crafted challenges for students and families, aligned to national goals.",
  },
  {
    icon: ShieldCheck,
    title: "Camera-verified impact",
    text: "Photo proof converts into kWh, liters, and waste metrics partners can trust.",
  },
];

export function SolutionStack() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setSlide((s) => (s + 1) % solutionImages.length),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative -mt-10 overflow-hidden bg-linear-to-r from-eco-green/20 via-eco-green/10 to-white px-6 py-16 dark:from-charcoal dark:via-charcoal/90 dark:to-charcoal/85">
      <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-eco-green/30 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-tech-blue/12 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-10 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1 space-y-6 min-h-[520px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-eco-green/40 bg-eco-green/15 px-3 py-1 text-xs font-semibold text-eco-green">
            EcoSync solution
          </div>
          <h2 className="text-3xl font-semibold text-text-primary sm:text-4xl">
            One platform to guide, verify, and celebrate sustainable living.
          </h2>
          <p className="text-base text-text-secondary">
            EcoSync blends predictive energy intelligence with adaptive
            eco-missions and trusted verification—so every household step rolls
            up to real, reportable impact for schools and national partners.
          </p>
          <div className="space-y-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-white/30 bg-white/80 px-4 py-3 text-sm text-text-primary shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-eco-green/15 text-eco-green">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-text-primary">
                    {title}
                  </p>
                  <p className="text-sm text-text-secondary">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 overflow-visible rounded-3xl"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative h-full min-h-[520px] perspective-1000">
            {solutionImages.map((img, idx) => {
              const offset =
                (idx - slide + solutionImages.length) % solutionImages.length;
              const depth = Math.min(offset, 3);
              const isTop = offset === 0;
              return (
                <motion.div
                  key={img.src}
                  className="absolute inset-0"
                  style={{ zIndex: solutionImages.length - offset }}
                  animate={{
                    x: depth * 26,
                    y: depth * -18,
                    rotate: depth * -6,
                    scale: 1 - depth * 0.06,
                    opacity: isTop ? 1 : 0.82 - depth * 0.07,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <div className="absolute inset-0 rounded-3xl border border-white/40 bg-white/40 shadow-2xl shadow-black/20 backdrop-blur">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="rounded-3xl object-cover"
                      priority={idx === slide}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-3">
            {solutionImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`h-2 w-6 rounded-full transition ${
                  slide === idx ? "bg-eco-green" : "bg-white/50"
                }`}
                aria-label={`Go to solution slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
