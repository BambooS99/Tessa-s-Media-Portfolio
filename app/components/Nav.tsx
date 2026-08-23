import Link from "next/link";

const linkClasses = "text-[#201f1d] hover:text-[#7d5411] no-underline";

const CATEGORIES = [
  { href: "/photos-portfolio/wedding", label: "Wedding" },
  { href: "/photos-portfolio/freelance", label: "Freelance" },
  { href: "/photos-portfolio/other-events", label: "Other Events" },
];

export default function Nav() {
  return (
    <nav className="flex justify-center items-center gap-9 text-[13px] uppercase tracking-[0.08em] font-[Lora] mb-10">
      <Link href="/" className={linkClasses}>
        welcome
      </Link>

      <div className="relative group pb-3 -mb-3">
        <Link href="/photos-portfolio" className={linkClasses}>
          photos portfolio
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block z-20">
          <div className="flex flex-col bg-[#f0ead6] border border-[rgba(32,31,29,0.15)] shadow-md min-w-[170px] py-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="px-4 py-2 text-[12px] normal-case tracking-normal text-[#201f1d] hover:text-[#7d5411] hover:bg-[rgba(32,31,29,0.05)] no-underline whitespace-nowrap"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link href="/videos-portfolio" className={linkClasses}>
        videos portfolio
      </Link>
      <Link href="/about" className={linkClasses}>
        about
      </Link>
      <Link href="/contact" className={linkClasses}>
        Contact
      </Link>
    </nav>
  );
}
