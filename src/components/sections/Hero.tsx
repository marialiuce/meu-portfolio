import { Github, Linkedin, Mail } from "lucide-react";
import TypingTag from "../shared/TypingTag";

export default function Hero() {
  return (
    <section id="hello" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <span className="text-xl md:text-2xl font-medium text-muted-foreground">Olá, eu sou</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary leading-tight">
            Maria Alice <span className="italic font-normal">(Liu)</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
            Desenvolvedora web apaixonada por tecnologia, em constante evolução para se tornar Full Stack.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
            <a href="#" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden shadow-xl" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}>
            <img src="/src/assets/perfil.jpg" alt="Foto de Maria Alice" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <TypingTag tag="</home>" />
    </section>
  );
}