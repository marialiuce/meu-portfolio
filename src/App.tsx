import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
      </main>
      <Footer />
    </div>
  );
}