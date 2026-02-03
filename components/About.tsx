"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Coffee, Users, Zap } from "lucide-react";

const features = [
    { icon: Users, label: "Student Friendly", desc: "The perfect hangout spot" },
    { icon: Zap, label: "Quick Service", desc: "No long waits" },
    { icon: Coffee, label: "Fresh Brews", desc: "Hot coffee & cool shakes" },
];

export default function About() {
    return (
        <Section id="about" className="bg-white/50 rounded-3xl my-10 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                        More than just a <span className="text-primary">Cafe</span>.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Zoop Cafe is a casual cafe located opposite CIT Engineering College, Gubbi.
                        A perfect spot for students, families, and travelers to enjoy fresh snacks,
                        coffee, shakes, and quick bites in a relaxed setting.
                    </p>
                    <div className="w-20 h-2 bg-primary rounded-full" />
                </motion.div>

                <div className="grid gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm border border-black/5 hover:border-black/10 transition-colors"
                        >
                            <div className="p-3 bg-secondary rounded-xl text-foreground">
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{feature.label}</h3>
                                <p className="text-muted-foreground text-sm">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
