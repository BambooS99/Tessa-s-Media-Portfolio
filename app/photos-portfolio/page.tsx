import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Photography Portfolio",
  description: "Browse Tessa Osborne's wedding, freelance, and event photography.",
};

const CATEGORIES = [
  { href: "/photos-portfolio/wedding", label: "wedding" },
  { href: "/photos-portfolio/freelance", label: "freelance" },
  { href: "/photos-portfolio/other-events", label: "other events" },
];

export default function PhotosPortfolio() {
  return (
    <main className="bg-[#f0ead6] text-[#201f1d] min-h-screen font-[Lora] pt-6 px-5 pb-14 sm:pt-8 sm:px-8 sm:pb-16 lg:pt-9 lg:px-14 lg:pb-20">
      <Nav />
      <div className="max-w-[1240px] mx-auto">
        <h1 className="font-['Cormorant_Garamond',serif] font-bold text-[34px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.01em] my-8 lg:my-11">
          photos portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-[900px]">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block border border-[rgba(32,31,29,0.2)] px-8 py-10 sm:py-14 text-center hover:border-[#7d5411] transition-colors"
            >
              <span className="font-['Cormorant_Garamond',serif] font-semibold text-[26px] leading-[1.1] capitalize group-hover:text-[#7d5411] transition-colors">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
