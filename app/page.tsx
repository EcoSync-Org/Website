import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/navigation/navbar";

export default function Page() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
    </div>
  );
}
