"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

// Reliable Unsplash images for Cafe/Food/Vibe
const images = [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop", // Social/Vibe
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", // Burger
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", // Coffee
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop", // Indian snacks/fried
    "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800&auto=format&fit=crop", // Shake
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Cafe Interior
];

export default function Gallery() {
    return (
        <Section id="gallery">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Vibe.</h2>
                <p className="text-muted-foreground text-lg">Good food, better mood.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className={`relative rounded-2xl overflow-hidden shadow-md group ${i === 0 || i === 3 ? "md:col-span-2" : ""
                            }`}
                    >
                        <Image
                            src={src}
                            alt="Zoop Cafe Vibe"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
