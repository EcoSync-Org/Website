"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";

const heroImages = [
  { src: "/assets/images/image1.jpg", alt: "Sustainable energy inspiration" },
  { src: "/assets/images/image2.jpg", alt: "Solar rooftops at sunrise" },
  { src: "/assets/images/image3.jpg", alt: "Smart energy insights at home" },
  { src: "/assets/images/image4.jpg", alt: "Connected smart home devices" },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/30 to-white/60 dark:from-charcoal/80 dark:via-charcoal/70 dark:to-charcoal/80" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-eco-green/15 blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-tech-blue/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-32 lg:flex-row lg:items-center lg:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-6"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-eco-green/30 bg-eco-green/10 px-3 py-1 text-xs font-semibold text-eco-green">
            Welcome to EcoSync
          </div> */}
          <h1 className="text-4xl font-semibold leading-tight text-text-primary sm:text-5xl">
            Rwanda’s AI eco companion: inspiring action, proving impact.
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary">
            Join a movement that makes sustainable living feel simple,
            rewarding, and real—smart solar guidance, adaptive eco-missions, and
            photo-verified results everyone can trust.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-eco-green px-5 py-3 text-sm font-semibold text-charcoal shadow-lg shadow-eco-green/30 transition hover:-translate-y-0.5 hover:shadow-eco-green/50"
            >
              <Download className="h-4 w-4" />
              Get our mobile app
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full border border-tech-blue/60 px-5 py-3 text-sm font-semibold text-tech-blue transition hover:bg-tech-blue/10"
            >
              <Play className="h-4 w-4" />
              Watch the live demo
            </a>
          </div>

          {/* <div className="flex flex-wrap gap-2 text-sm text-text-secondary">
            <span className="rounded-full border border-dim-gray/30 px-3 py-1 bg-white/70 dark:bg-white/5">
              Predictive solar tips that fit your day
            </span>
            <span className="rounded-full border border-dim-gray/30 px-3 py-1 bg-white/70 dark:bg-white/5">
              Missions that adapt to your progress
            </span>
            <span className="rounded-full border border-dim-gray/30 px-3 py-1 bg-white/70 dark:bg-white/5">
              Photo proof → verified impact data
            </span>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {heroImages.map((img, idx) => {
              const rotations = [-6, 4, -3, 6];
              const floatY = [-6, 6, -4, 8];
              return (
                <motion.div
                  key={img.src}
                  className="relative h-48 overflow-hidden rounded-3xl border border-white/30 bg-white/60 shadow-lg shadow-eco-green/10 backdrop-blur sm:h-56 lg:h-64"
                  initial={{
                    opacity: 0,
                    y: 24,
                    rotate: rotations[idx % rotations.length],
                  }}
                  animate={{
                    opacity: 1,
                    y: [
                      floatY[idx % floatY.length],
                      0,
                      floatY[idx % floatY.length],
                    ],
                    rotate: rotations[idx % rotations.length],
                  }}
                  transition={{
                    delay: 0.08 * idx + 0.05,
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    rotate: rotations[idx % rotations.length] * -1,
                    scale: 1.02,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={idx < 2}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-charcoal/30 to-transparent" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
