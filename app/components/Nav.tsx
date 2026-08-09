import Link from "next/link";

export default function Nav() {
  const links = [
    { href: "/", label: "welcome" },
    { href: "/photos-portfolio", label: "photos portfolio" },
    { href: "/videos-portfolio", label: "videos portfolio" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="flex justify-center gap-9 text-[13px] uppercase tracking-[0.08em] font-[Lora] mb-10">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-[#201f1d] hover:text-[#7d5411] no-underline">
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
