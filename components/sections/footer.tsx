"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
} from "lucide-react";

const navigation = {
  platform: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Challenges", href: "#challenges" },
  ],
  resources: [
    { name: "Demo", href: "#demo" },
    { name: "FAQs", href: "#faq" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
  partners: [
    { name: "REMA", href: "#" },
    { name: "REB", href: "#" },
    { name: "REG", href: "#" },
    { name: "MINEDUC", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray/10 bg-white dark:bg-charcoal">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-eco-green/3 via-transparent to-tech-blue/3" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <div className="relative h-16 w-32">
                <Image
                  src="/assets/logo.png"
                  alt="EcoSync"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Rwanda&apos;s first AI-powered sustainability platform
              transforming students into eco-leaders through smart energy
              guidance and verified environmental action.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-eco-green/20 bg-eco-green/5 text-eco-green transition-all hover:bg-eco-green hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Platform */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
                Platform
              </h3>
              <ul className="space-y-3">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary transition-colors hover:text-eco-green"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
                Resources
              </h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary transition-colors hover:text-eco-green"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
                Partners
              </h3>
              <ul className="space-y-3">
                {navigation.partners.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary transition-colors hover:text-eco-green"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 border-t border-gray/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-eco-green/10 text-eco-green">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                  Email
                </p>
                <a
                  href="mailto:info@ecosync.rw"
                  className="text-sm text-text-primary transition-colors hover:text-eco-green"
                >
                  info@ecosync.rw
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tech-blue/10 text-tech-blue">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                  Phone
                </p>
                <a
                  href="tel:+250788000000"
                  className="text-sm text-text-primary transition-colors hover:text-eco-green"
                >
                  +250 788 000 000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-eco-green/10 text-eco-green">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                  Location
                </p>
                <p className="text-sm text-text-primary">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray/10 pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center text-sm text-text-secondary">
            © {new Date().getFullYear()} EcoSync. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-text-secondary">
            Made with{" "}
            <Heart className="h-4 w-4 fill-eco-green text-eco-green" /> for
            Rwanda&apos;s future
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
