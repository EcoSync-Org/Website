"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LogIn, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useEffect, useState } from "react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#modules", label: "Modules" },
  { href: "#students", label: "Students" },
  { href: "#families", label: "Families" },
  { href: "#impact", label: "Impact" },
  { href: "#partners", label: "Partners" },
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
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center gap-4 rounded-full border border-eco-green/25 bg-gradient-to-r from-eco-green/12 via-white/6 to-tech-blue/12 px-4 py-3 text-sm text-text-primary backdrop-blur-md md:px-6 dark:border-white/10 dark:from-eco-green/10 dark:via-white/5 dark:to-tech-blue/10">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-36">
            <Image
              src="/assets/logo.png"
              alt="EcoSync"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
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

        <div className="hidden flex-1 items-center justify-end gap-2 sm:flex">
          <Link
            href="#login"
            className="hidden items-center gap-1 rounded-full px-3 py-2 text-text-secondary transition hover:text-text-primary md:inline-flex"
          >
            <LogIn className="h-4 w-4" />
            Log in
          </Link>
          <Link
            href="#signup"
            className="inline-flex items-center gap-1 rounded-full bg-eco-green px-3.5 py-2 text-sm font-semibold text-charcoal shadow-lg shadow-eco-green/30 transition hover:-translate-y-0.5 hover:shadow-eco-green/50"
          >
            Sign up
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#login"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-text-secondary transition hover:text-text-primary"
            >
              <LogIn className="h-4 w-4" />
              Log in
            </Link>
            <Link
              href="#signup"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-eco-green px-4 py-2 text-sm font-semibold text-charcoal shadow-lg shadow-eco-green/30 transition hover:-translate-y-0.5 hover:shadow-eco-green/50"
            >
              Sign up
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="flex w-full justify-center pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
