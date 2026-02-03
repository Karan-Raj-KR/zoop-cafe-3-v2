"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const categories = siteConfig.menuCategories;

export default function Menu() {
    return (
        <Section id="menu" className="bg-secondary/30 rounded-3xl py-24">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading font-black text-foreground mb-4"
                >
                    WHAT'S COOKING?
                </motion.h2>
                <p className="text-muted-foreground text-lg">Menu items subject to availability</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="group bg-background p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-default"
                    >
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {cat.name}
                        </h3>
                        <p className="text-muted-foreground mb-6">{cat.items}</p>
                        <div className="flex items-center text-sm font-bold text-foreground/50 group-hover:text-primary transition-colors">
                            Explore <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
