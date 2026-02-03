import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <CustomCursor />
      <Navbar />

      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
