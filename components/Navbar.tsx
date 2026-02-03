"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const navLinks = siteConfig.navLinks;

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants: Variants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 },
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-primary/10">
            <Link href="/" className="text-2xl font-heading font-bold text-foreground z-50">
                {siteConfig.name}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg relative group"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                    </Link>
                ))}
                <Link
                    href="#location"
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors"
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                onClick={toggleMenu}
                className="md:hidden z-50 p-2 text-foreground focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 md:hidden h-dvh"
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={linkVariants}>
                                <Link
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className="text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div variants={linkVariants}>
                            <Link
                                href="#location"
                                onClick={toggleMenu}
                                className="text-2xl font-heading font-bold text-primary mt-4 block"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
