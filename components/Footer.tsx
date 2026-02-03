import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="py-8 text-center text-muted-foreground border-t border-black/5">
            <p className="font-heading font-medium">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All vibes reserved.
            </p>
        </footer>
    );
}
