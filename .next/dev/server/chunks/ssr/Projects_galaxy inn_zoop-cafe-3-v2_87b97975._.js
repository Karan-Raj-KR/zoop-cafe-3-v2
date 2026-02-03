module.exports = [
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/config/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Zoop Cafe",
    description: "Fresh snacks, quick bites, and café-style food near CIT College. The best hangout spot in Gubbi.",
    navLinks: [
        {
            name: "Home",
            href: "#hero"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Menu",
            href: "#menu"
        },
        {
            name: "Location",
            href: "#location"
        }
    ],
    hero: {
        title: "ZOOP CAFE",
        subtitle: "GUBBI",
        description: "Fresh snacks, quick bites, and the perfect vibe near CIT College.",
        cta: "View Menu",
        directions: "Get Directions"
    },
    location: {
        title: "Drop by for a bite.",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.331238936087!2d76.9132799!3d13.3129259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02385bb2b7089%3A0xedbbffe7d55e66a3!2sZoop%20Cafe%20Gubbi!5e0!3m2!1sen!2sin!4v1709886735951!5m2!1sen!2sin",
        mapPageUrl: "https://www.google.com/maps/place/Zoop+Cafe+Gubbi/@13.3129311,76.910705,1079m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bb02385bb2b7089:0xedbbffe7d55e66a3!8m2!3d13.3129259!4d76.9132799!16s%2Fg%2F11sk63lv3y",
        address: [
            "Zoop Cafe Gubbi,",
            "Opposite CIT Engineering College,",
            "Harivesandra, Gubbi, Karnataka"
        ],
        hours: [
            "Open Daily",
            "Until 10:00 PM"
        ]
    },
    contact: {
        phone: "+91 99164 05635",
        phoneUrl: "+919916405635",
        instagramUrl: "https://www.instagram.com/zoopcafe_gubbi"
    },
    menuCategories: [
        {
            name: "Snacks & Vada Pav",
            items: "Classic Mumbai style bites"
        },
        {
            name: "Maggi & Quick Bites",
            items: "Cheese, Masala & Veggie"
        },
        {
            name: "Momos",
            items: "Steamed & Fried delicacies"
        },
        {
            name: "Sandwiches",
            items: "Grilled & Club Sandwiches"
        },
        {
            name: "Shakes & Beverages",
            items: "Thick shakes & Mojitos"
        },
        {
            name: "Tea & Coffee",
            items: "Hot brews & Cold coffee"
        }
    ]
};
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/config/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const navLinks = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].navLinks;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: "0%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const linkVariants = {
        closed: {
            x: 50,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-primary/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "text-2xl font-heading font-bold text-foreground z-50",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].name
            }, void 0, false, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-8",
                children: [
                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: "text-foreground/80 hover:text-primary transition-colors font-medium text-lg relative group",
                            children: [
                                link.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, link.name, true, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "#location",
                        className: "bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold hover:bg-primary/90 transition-colors",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMenu,
                className: "md:hidden z-50 p-2 text-foreground focus:outline-none",
                "aria-label": "Toggle menu",
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 27
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 45
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "closed",
                    animate: "open",
                    exit: "closed",
                    variants: menuVariants,
                    className: "fixed inset-0 bg-background flex flex-col items-center justify-center gap-8 md:hidden h-dvh",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: linkVariants,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    onClick: toggleMenu,
                                    className: "text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors",
                                    children: link.name
                                }, void 0, false, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                                    lineNumber: 90,
                                    columnNumber: 33
                                }, this)
                            }, link.name, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: linkVariants,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#location",
                                onClick: toggleMenu,
                                className: "text-2xl font-heading font-bold text-primary mt-4 block",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                    lineNumber: 81,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Navbar.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/MagneticButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MagneticButton({ children, className, onClick }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springConfig = {
        damping: 15,
        stiffness: 150,
        mass: 0.1
    };
    const xSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x, springConfig);
    const ySpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y, springConfig);
    const handleMouseMove = (e)=>{
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * 0.3); // Magnetic strength
        y.set(middleY * 0.3);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        ref: ref,
        onClick: onClick,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: {
            x: xSpring,
            y: ySpring
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative px-8 py-4 rounded-full font-heading font-bold text-lg overflow-hidden transition-colors", className),
        whileTap: {
            scale: 0.95
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: children
        }, void 0, false, {
            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/MagneticButton.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/MagneticButton.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/MagneticButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/config/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary/20 blur-[120px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/40 blur-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-6 relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        },
                        className: "text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter text-foreground mb-6",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-primary text-4xl md:text-6xl lg:text-8xl mt-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut"
                        },
                        className: "text-lg md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].hero.description
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.4
                        },
                        className: "flex flex-col md:flex-row gap-6 justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "bg-foreground text-background hover:bg-foreground/90 w-full md:w-auto min-w-[200px]",
                                    children: [
                                        "View Menu ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "inline ml-2 w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                            lineNumber: 49,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location.mapPageUrl,
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground/5 w-full md:w-auto min-w-[200px]",
                                    children: [
                                        "Get Directions ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "inline ml-2 w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                            lineNumber: 57,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Hero.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Section({ id, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("py-20 px-6 md:px-12 lg:px-24 w-full max-w-7xl mx-auto", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/coffee.js [app-ssr] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
"use client";
;
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        label: "Student Friendly",
        desc: "The perfect hangout spot"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Quick Service",
        desc: "No long waits"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
        label: "Fresh Brews",
        desc: "Hot coffee & cool shakes"
    }
];
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "about",
        className: "bg-white/50 rounded-3xl my-10 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground",
                            children: [
                                "More than just a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "Cafe"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 42
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-muted-foreground leading-relaxed mb-6",
                            children: "Zoop Cafe is a casual cafe located opposite CIT Engineering College, Gubbi. A perfect spot for students, families, and travelers to enjoy fresh snacks, coffee, shakes, and quick bites in a relaxed setting."
                        }, void 0, false, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-2 bg-primary rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6",
                    children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: i * 0.1,
                                duration: 0.5
                            },
                            className: "flex items-center gap-4 p-4 bg-background rounded-2xl shadow-sm border border-black/5 hover:border-black/10 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-secondary rounded-xl text-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                        lineNumber: 45,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: feature.label
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground text-sm",
                                            children: feature.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/About.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/config/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const categories = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].menuCategories;
function Menu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "menu",
        className: "bg-secondary/30 rounded-3xl py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-4xl md:text-6xl font-heading font-black text-foreground mb-4",
                        children: "WHAT'S COOKING?"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "Menu items subject to availability"
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        whileHover: {
                            y: -10
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.05,
                            duration: 0.4
                        },
                        className: "group bg-background p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-default",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2 group-hover:text-primary transition-colors",
                                children: cat.name
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground mb-6",
                                children: cat.items
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-sm font-bold text-foreground/50 group-hover:text-primary transition-colors",
                                children: [
                                    "Explore ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                                        lineNumber: 42,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Menu.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Reliable Unsplash images for Cafe/Food/Vibe
const images = [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
];
function Gallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "gallery",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-5xl font-heading font-bold mb-4",
                        children: "The Vibe."
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground text-lg",
                        children: "Good food, better mood."
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]",
                children: images.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.1
                        },
                        whileHover: {
                            scale: 1.02
                        },
                        className: `relative rounded-2xl overflow-hidden shadow-md group ${i === 0 || i === 3 ? "md:col-span-2" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: "Zoop Cafe Vibe",
                                fill: true,
                                className: "object-cover transition-transform duration-700 group-hover:scale-110",
                                sizes: "(max-width: 768px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Gallery.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/Section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/MagneticButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/navigation.js [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/config/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Location() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "location",
        className: "py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl bg-secondary/20 overflow-hidden border border-black/5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[400px] md:h-auto min-h-[400px] relative bg-neutral-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location.mapEmbedUrl,
                            width: "100%",
                            height: "100%",
                            style: {
                                border: 0,
                                filter: "grayscale(20%) contrast(1.1) opacity(0.9)"
                            },
                            allowFullScreen: true,
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade",
                            title: `${__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].name} Location`,
                            className: "absolute inset-0"
                        }, void 0, false, {
                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                            lineNumber: 16,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 md:p-12 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-heading font-bold mb-8",
                                children: "Drop by for a bite."
                            }, void 0, false, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-3 rounded-full shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "text-primary w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg",
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                        lineNumber: 39,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location.address.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    line,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                                        lineNumber: 43,
                                                                        columnNumber: 55
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                                lineNumber: 42,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 38,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-3 rounded-full shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "text-primary w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 51,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg",
                                                        children: "Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location.hours.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    line,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                                        lineNumber: 59,
                                                                        columnNumber: 55
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 items-start pt-4 w-full sm:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].location.mapPageUrl,
                                        target: "_blank",
                                        className: "w-full sm:w-auto z-30 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors",
                                            children: [
                                                "Get Directions ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                    className: "ml-2 w-4 h-4 inline"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 52
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group w-full sm:w-auto z-20 flex flex-col items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].contact.phoneUrl}`,
                                                className: "w-full sm:w-auto block relative z-30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors",
                                                    children: [
                                                        "Call Us ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "ml-2 w-4 h-4 inline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " w-full sm:w-auto mt-2  sm:absolute sm:top-1/2 sm:left-full sm:mt-0 sm:ml-4 sm:opacity-0 sm:-translate-y-1/2 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300 pointer-events-none sm:pointer-events-auto bg-white px-4 py-2 rounded-xl border border-black/5 shadow-sm text-center sm:text-left z-20 block whitespace-nowrap ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-lg text-primary tracking-wide font-heading block",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].contact.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                lineNumber: 90,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].contact.instagramUrl,
                                        target: "_blank",
                                        className: "w-full sm:w-auto z-10 relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "bg-white text-foreground border border-black/10 w-full sm:w-auto hover:bg-black/5 transition-colors",
                                            children: [
                                                "Instagram ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    className: "ml-2 w-4 h-4 inline"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                            lineNumber: 110,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/Location.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
"[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/galaxy inn/zoop-cafe-3-v2/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function CustomCursor() {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursorX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const cursorY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const springConfig = {
        damping: 25,
        stiffness: 700
    };
    const cursorXSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorX, springConfig);
    const cursorYSpring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(cursorY, springConfig);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const moveCursor = (e)=>{
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };
        const handleMouseOver = (e)=>{
            const target = e.target;
            if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a") || target.getAttribute("role") === "button") {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };
        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        return ()=>{
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [
        cursorX,
        cursorY
    ]);
    // Don't render on server or if not moved yet
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$galaxy__inn$2f$zoop$2d$cafe$2d$3$2d$v2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "custom-cursor fixed pointer-events-none z-[9999] rounded-full mix-blend-exclusion bg-primary top-0 left-0",
        style: {
            translateX: cursorXSpring,
            translateY: cursorYSpring
        },
        animate: {
            width: isHovered ? 64 : 16,
            height: isHovered ? 64 : 16,
            opacity: 1,
            x: "-50%",
            y: "-50%"
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 20
        }
    }, void 0, false, {
        fileName: "[project]/Projects/galaxy inn/zoop-cafe-3-v2/components/ui/CustomCursor.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Projects_galaxy%20inn_zoop-cafe-3-v2_87b97975._.js.map