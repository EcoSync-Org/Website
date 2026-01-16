"use client";

import { motion } from "framer-motion";
import {
  Download,
  Play,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  "Join 500+ students already making a difference",
  "Track your environmental impact in real-time",
  "Earn rewards and compete with your school",
  "Get AI-powered sustainability guidance",
];

export function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-[#4CAF50] px-6 py-16 lg:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-white/10"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Content */}
          <motion.div
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Start Your Eco Journey Today
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to become Rwanda&apos;s next eco-champion?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg leading-relaxed text-white/90 sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transform your daily actions into measurable impact. Download
              EcoSync now and join thousands of students leading Rwanda&apos;s
              sustainability revolution.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <span className="text-base text-white/95">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#download"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#4CAF50] shadow-xl shadow-black/20 transition-all hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5" />
                Download Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/20 via-transparent to-white/10 p-[2px]">
                <div className="h-full w-full rounded-3xl bg-white/5 backdrop-blur" />
              </div>

              {/* Video */}
              <div className="relative z-10">
                <video
                  className="h-auto w-full rounded-3xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/images/mockups/m1.png"
                >
                  <source src="/assets/videos/ecosync.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video overlay decorations */}
              <motion.div
                className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-white/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Stats floating cards */}
            <motion.div
              className="absolute -left-4 top-8 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 backdrop-blur-xl lg:-left-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              animate={{ y: [0, -10, 0] }}
              style={{ animationDuration: "3s" }}
            >
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-white/80">Active Students</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 right-4 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 backdrop-blur-xl lg:-bottom-6 lg:right-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              animate={{ y: [0, -8, 0] }}
              style={{ animationDuration: "4s" }}
            >
              <div className="text-2xl font-bold text-white">5 Schools</div>
              <div className="text-xs text-white/80">Pilot Program</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
