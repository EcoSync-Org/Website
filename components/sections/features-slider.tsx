"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Zap,
  Target,
  Camera,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Smart Solar & Energy Advisor",
    tagline: "AI-Powered Energy Intelligence",
    description:
      "Predictive AI analyzes household electricity patterns and solar generation data, providing personalized recommendations to maximize solar efficiency and prevent prepaid electricity outages.",
    highlights: [
      {
        icon: Sparkles,
        text: "Smart alerts prevent prepaid electricity outages",
      },
      {
        icon: TrendingUp,
        text: "Simulate energy savings to encourage adoption",
      },
      { icon: Shield, text: "No additional hardware required" },
    ],
    image: "/assets/images/mockups/m1.png",
    imageWidth: 2112.67,
    imageHeight: 2554,
    gradient: "from-sun-yellow/20 via-eco-green/10 to-tech-blue/15",
    accentColor: "text-sun-yellow",
    badgeColor: "bg-sun-yellow/20 text-sun-yellow border-sun-yellow/30",
  },
  {
    id: 2,
    icon: Target,
    title: "Adaptive Eco-Challenge Engine",
    tagline: "Personalized Sustainability Missions",
    description:
      "Generative AI creates context-aware sustainability missions that adapt in real-time to user progress, local conditions, and active campaigns from partners like REG, REMA, and MINIRENA.",
    highlights: [
      {
        icon: Sparkles,
        text: "Real-time adaptation to user progress and conditions",
      },
      { icon: TrendingUp, text: "Missions aligned with national campaigns" },
      { icon: Shield, text: "Gamified learning for lasting engagement" },
    ],
    image: "/assets/images/mockups/m1.png",
    imageWidth: 2112.67,
    imageHeight: 2554,
    gradient: "from-tech-blue/20 via-sky-blue/15 to-eco-green/10",
    accentColor: "text-tech-blue",
    badgeColor: "bg-tech-blue/20 text-tech-blue border-tech-blue/30",
  },
  {
    id: 3,
    icon: Camera,
    title: "Vision-Based Verification & Impact Tracker",
    tagline: "Proof That Powers Progress",
    description:
      "AI-powered image recognition verifies completed eco-actions, converting them into quantifiable metrics (kWh saved, liters preserved, waste diverted) and visualizing progress through dynamic dashboards.",
    highlights: [
      {
        icon: Sparkles,
        text: "Camera verification via smartphone—no extra hardware",
      },
      {
        icon: TrendingUp,
        text: "Real-time dashboards for students, schools & ministries",
      },
      {
        icon: Shield,
        text: "Verified data supports national SDG reporting",
      },
    ],
    image: "/assets/images/mockups/m1.png",
    imageWidth: 2112.67,
    imageHeight: 2554,
    gradient: "from-tech-blue/20 via-sky-blue/15 to-eco-green/10",
    accentColor: "text-tech-blue",
    badgeColor: "bg-tech-blue/20 text-tech-blue border-tech-blue/30",
  },
];

export function FeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];
  const FeatureIcon = activeFeature.icon;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-charcoal">
      {/* Subtle animated background blobs */}
      <motion.div
        className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-eco-green/8 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-tech-blue/8 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-eco-green/20 bg-eco-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-eco-green">
            <Sparkles className="h-3.5 w-3.5" />
            Three AI-Powered Modules
          </div>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            Intelligent Solutions for
            <br />
            <span className="text-eco-green">Sustainable Living</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-text-secondary sm:text-lg">
            EcoSync combines three cutting-edge AI modules to transform how
            Rwanda&apos;s youth and families engage with sustainability.
          </p>
        </motion.div>

        {/* Main slider content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12`}
            >
              {/* Left: Image */}
              <motion.div
                className="relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="relative mx-auto"
                  style={{ maxWidth: "100%" }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    width={activeFeature.imageWidth}
                    height={activeFeature.imageHeight}
                    className="h-auto w-full max-w-full object-contain drop-shadow-2xl"
                    priority
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                className="order-1 space-y-6 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Feature number badge */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${activeFeature.badgeColor}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FeatureIcon className="h-7 w-7" />
                  </motion.div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                      Module {activeFeature.id}
                    </div>
                    <div
                      className={`text-sm font-semibold ${activeFeature.accentColor}`}
                    >
                      {activeFeature.tagline}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                  {activeFeature.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                  {activeFeature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-2">
                  {activeFeature.highlights.map((highlight, idx) => {
                    const HighlightIcon = highlight.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 rounded-xl border border-eco-green/20 bg-white/80 px-4 py-3 transition-all hover:border-eco-green/40 hover:shadow-sm dark:border-eco-green/10 dark:bg-charcoal/50 dark:hover:border-eco-green/20"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-green/20">
                          <HighlightIcon className="h-3 w-3 text-eco-green" />
                        </div>
                        <span className="flex-1 text-sm leading-relaxed text-text-primary">
                          {highlight.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="mt-16 flex items-center justify-center gap-6">
            {/* Previous button */}
            <motion.button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-eco-green/30 bg-white text-eco-green transition-all hover:bg-eco-green hover:text-white dark:border-eco-green/20 dark:bg-graphite dark:hover:bg-eco-green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {features.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-10 bg-eco-green"
                      : "w-2 bg-gray/40 hover:bg-gray/60 dark:bg-gray/30"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-eco-green/30 bg-white text-eco-green transition-all hover:bg-eco-green hover:text-white dark:border-eco-green/20 dark:bg-graphite dark:hover:bg-eco-green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
