"use client";

import Section from "./ui/Section";
import MagneticButton from "./ui/MagneticButton";
import { MapPin, Navigation, Clock, Phone, Instagram } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Location() {
    return (
        <Section id="location" className="py-24">
            <div className="rounded-3xl bg-secondary/20 overflow-hidden border border-black/5">
                <div className="grid md:grid-cols-2">
                    {/* Map Side */}
                    <div className="h-[400px] md:h-auto min-h-[400px] relative bg-neutral-200">
                        <iframe
                            src={siteConfig.location.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(20%) contrast(1.1) opacity(0.9)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${siteConfig.name} Location`}
                            className="absolute inset-0"
                        ></iframe>
                    </div>

                    {/* Info Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-4xl font-heading font-bold mb-8">Drop by for a bite.</h2>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <MapPin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Address</h3>
                                    <p className="text-muted-foreground">
                                        {siteConfig.location.address.map((line, i) => (
                                            <span key={i}>
                                                {line}<br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Clock className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Hours</h3>
                                    <p className="text-muted-foreground">
                                        {siteConfig.location.hours.map((line, i) => (
                                            <span key={i}>
                                                {line}<br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Actions Stack */}
                        <div className="flex flex-col gap-4 items-start pt-4 w-full sm:w-auto">

                            {/* 1. Get Directions */}
                            <Link
                                href={siteConfig.location.mapPageUrl}
                                target="_blank"
                                className="w-full sm:w-auto z-30 relative"
                            >
                                <MagneticButton className="bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors">
                                    Get Directions <Navigation className="ml-2 w-4 h-4 inline" />
                                </MagneticButton>
                            </Link>

                            {/* 2. Call Us Group */}
                            <div className="relative group w-full sm:w-auto z-20 flex flex-col items-start">
                                <Link href={`tel:${siteConfig.contact.phoneUrl}`} className="w-full sm:w-auto block relative z-30">
                                    <MagneticButton className="bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors">
                                        Call Us <Phone className="ml-2 w-4 h-4 inline" />
                                    </MagneticButton>
                                </Link>

                                {/* Phone Number - Desktop: Reveal Beside, Mobile: Always Visible */}
                                <div className="
                        w-full sm:w-auto mt-2 
                        sm:absolute sm:top-1/2 sm:left-full sm:mt-0 sm:ml-4
                        sm:opacity-0 sm:-translate-y-1/2 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0
                        transition-all duration-300 pointer-events-none sm:pointer-events-auto
                        bg-white px-4 py-2 rounded-xl border border-black/5 shadow-sm
                        text-center sm:text-left z-20 block whitespace-nowrap
                    ">
                                    <span className="font-bold text-lg text-primary tracking-wide font-heading block">
                                        {siteConfig.contact.phone}
                                    </span>
                                </div>
                            </div>

                            {/* 3. Instagram */}
                            <Link
                                href={siteConfig.contact.instagramUrl}
                                target="_blank"
                                className="w-full sm:w-auto z-10 relative"
                            >
                                <MagneticButton className="bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors">
                                    Instagram <Instagram className="ml-2 w-4 h-4 inline" />
                                </MagneticButton>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
