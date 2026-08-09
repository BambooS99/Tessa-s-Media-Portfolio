import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tessa Osborne — Photography",
  description: "Portfolio of Tessa Osborne, a photographer working primarily in digital.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
