import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PerpeX Practical B-School",
  description: "Find the PerpeX learning path built around your stage, goals and time.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}