"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#solution", label: "Solution" },
  { href: "#challenges", label: "Challenges" },
  { href: "#demo", label: "Demo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav className="flex w-full max-w-6xl items-center gap-4 rounded-full border border-eco-green/25 bg-linear-to-r from-eco-green/12 via-white/6 to-tech-blue/12 px-4 py-3 text-sm text-text-primary backdrop-blur-md md:px-6 dark:border-white/10 dark:from-eco-green/10 dark:via-white/5 dark:to-tech-blue/10">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-40">
            <Image
              src="/assets/logo.png"
              alt="EcoSync"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary transition hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden w-24 items-center justify-end sm:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-text-primary backdrop-blur md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] border-l border-white/15 bg-white/90 p-5 text-sm text-text-primary backdrop-blur transition-transform duration-300 dark:border-white/10 dark:bg-graphite/95 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="relative h-10 w-28">
              <Image
                src="/assets/logo.png"
                alt="EcoSync"
                fill
                className="object-contain"
              />
            </div>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-primary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-2 text-text-secondary transition hover:bg-white/5 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex w-full justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
