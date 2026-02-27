import Header from "./components/shared/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TypingTag from "./components/shared/TypingTag";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Header />

      <main>
        {/* Seção 1 */}
        <Hero />

        {/* Nossa nova Seção 2 */}
        <About />

        {/* Seção 3 */}
        <section id="skills" className="relative min-h-screen flex items-center justify-center border-t border-border/40">
          <h2 className="text-4xl font-serif text-primary">Seção 3: Habilidades</h2>
          <TypingTag tag="</skills>" />
        </section>

        {/* Seção 4 */}
        <section id="experience" className="relative min-h-screen flex items-center justify-center border-t border-border/40">
          <h2 className="text-4xl font-serif text-primary">Seção 4: Experiências e Projetos</h2>
          <TypingTag tag="</experience>" />
        </section>
      </main>
    </div>
  );
}