import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Changed fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { siteConfig } from "@/config/site";
import Particles from "@/components/ui/Particles";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Vibe-Coded Cafe`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <Particles
          className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
          particleCount={800}
          particleSpread={10}
          speed={0.05}
          particleColors={["#2C2420"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
        {children}
      </body>
    </html>
  );
}
