import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tessaosborne.com"),
  title: {
    default: "Tessa Osborne - Photographer",
    template: "%s | Tessa Osborne",
  },
  description:
    "Photography portfolio of Tessa Osborne: weddings, freelance work, and other events.",
  applicationName: "Tessa Osborne Photography",
  authors: [{ name: "Tessa Osborne" }],
  creator: "Tessa Osborne",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tessa Osborne Photography",
    title: "Tessa Osborne - Photographer",
    description:
      "Photography portfolio of Tessa Osborne: weddings, freelance work, and other events.",
  },
  twitter: {
    card: "summary",
    title: "Tessa Osborne - Photographer",
    description:
      "Photography portfolio of Tessa Osborne: weddings, freelance work, and other events.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
