"use client";

import { motion } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Noise & Gradient */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/40 blur-[100px]"></div>
            </div>

            <div className="container px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter text-foreground mb-6"
                >
                    {siteConfig.hero.title}
                    <span className="block text-primary text-4xl md:text-6xl lg:text-8xl mt-2">
                        {siteConfig.hero.subtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {siteConfig.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <Link href="#menu">
                        <MagneticButton className="bg-foreground text-background hover:bg-foreground/90 w-full md:w-auto min-w-[200px]">
                            View Menu <ArrowRight className="inline ml-2 w-5 h-5" />
                        </MagneticButton>
                    </Link>



                    <Link href={siteConfig.location.mapPageUrl} target="_blank">
                        <MagneticButton className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground/5 w-full md:w-auto min-w-[200px]">
                            Get Directions <MapPin className="inline ml-2 w-5 h-5" />
                        </MagneticButton>
                    </Link>
                </motion.div>
            </div>
        </section >
    );
}
