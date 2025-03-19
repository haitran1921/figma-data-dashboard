import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Figma Data Dashboard",
  description: "A dashboard for Figma design data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}