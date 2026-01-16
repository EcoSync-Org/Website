"use client";

import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/navigation/navbar";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-linear-to-br from-white via-mint-green/10 to-sky-blue/10">
        <div className="text-center space-y-4">
          <Circles color="#66BB6A" height={80} width={80} />
          {/* <p className="text-eco-green font-semibold text-lg animate-pulse">
            Loading EcoSync...
          </p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
    </div>
  );
}
