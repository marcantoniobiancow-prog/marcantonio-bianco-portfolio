import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => (
  <main className="relative z-10 min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
    <Navbar />
    <Hero />
    <FeaturedWorks />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
);

export default Index;
