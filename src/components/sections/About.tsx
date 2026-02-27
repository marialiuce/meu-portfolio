import { useState } from "react";
import { motion } from "framer-motion";
import { Cat, Bike, MapPin, CodeXml, Heart, Palette, Leaf, Dice6, BookOpen, Coffee, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingTag from "../shared/TypingTag";

export default function About() {
  // Estado que controla se os balões estão visíveis
  const [showHobbies, setShowHobbies] = useState(false);

  // Seus 11 fatos com posições calculadas para formar um círculo ao redor da foto
  const hobbies = [
    { id: 1, icon: <TerminalSquare size={20} />, label: "Liu", position: "-top-4 left-[10%]", delay: 0.1 },
    { id: 2, icon: <MapPin size={20} />, label: "Brasileira, 25 anos", position: "-top-10 left-[35%]", delay: 0.2 },
    { id: 3, icon: <BookOpen size={20} />, label: "Estudante de ADS", position: "-top-6 right-[10%]", delay: 0.3 },
    { id: 4, icon: <CodeXml size={20} />, label: "Full Stack em formação", position: "top-[15%] -right-16", delay: 0.4 },
    { id: 5, text: true, icon: <Heart size={20} />, label: "Ama transformar ideias em código", position: "top-[40%] -right-28", delay: 0.5 },
    { id: 6, icon: <Dice6 size={20} />, label: "RPG player", position: "bottom-[20%] -right-12", delay: 0.6 },
    { id: 7, icon: <Bike size={20} />, label: "Gosta de andar de bike", position: "-bottom-4 right-[5%]", delay: 0.7 },
    { id: 8, icon: <Palette size={20} />, label: "Faz crochê", position: "-bottom-10 left-[35%]", delay: 0.8 },
    { id: 9, icon: <Cat size={20} />, label: "Tem 6 gatos e ama plantas", position: "-bottom-2 left-[0%]", delay: 0.9 },
    { id: 10, icon: <Coffee size={20} />, label: "Coffee lover", position: "bottom-[20%] -left-16", delay: 1.0 },
    { id: 11, icon: <CodeXml size={20} />, label: "entre código e criatividade.", position: "top-[20%] -left-24", delay: 1.1 },
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Coluna da Esquerda: Foto e Hobbies */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            
            {/* A Foto Estática (Padrão Antigo) */}
            <div className="w-full h-full overflow-hidden shadow-xl z-10 relative" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
              <img 
                src="/src/assets/perfil.jpg" 
                alt="Maria Alice" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Renderizando os Hobbies Animados */}
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: showHobbies ? 1 : 0,
                  scale: showHobbies ? 1 : 0,
                }}
                transition={{ 
                  type: "spring", 
                  bounce: 0.5, 
                  duration: 0.6,
                  delay: showHobbies ? hobby.delay : 0 
                }}
                // A classe z-20 garante que eles fiquem por cima da foto
                className={`absolute ${hobby.position} z-20 flex flex-col items-center gap-1.5 pointer-events-none`}
              >
                <div className="bg-background border-2 border-primary text-primary p-2.5 rounded-full shadow-lg">
                  {hobby.icon}
                </div>
                <span className="text-[11px] font-bold text-primary bg-background/95 border border-border px-2.5 py-1 rounded-md shadow-sm whitespace-nowrap">
                  {hobby.label}
                </span>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Coluna da Direita: Textos e Botão */}
        <div className="flex flex-col space-y-6 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Sobre Mim</h2>
          
          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad ab reiciendis cupiditate odio dicta, obcaecati temporibus eaque quaerat. Unde impedit minima ea perferendis temporibus odio sequi mollitia ab dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore aliquam illum tempora quibusdam. Cupiditate porro eligendi, incidunt recusandae qui labore iusto quod iure excepturi, illum consequuntur quis eaque animi?
            </p>
          </div>

          <div className="pt-4 flex justify-center lg:justify-start">
            <Button 
              onClick={() => setShowHobbies(!showHobbies)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-serif transition-transform active:scale-95 shadow-md hover:shadow-lg"
            >
              {showHobbies ? "Ocultar detalhes" : "Descobrir mais sobre mim"}
            </Button>
          </div>
        </div>

      </div>

      <TypingTag tag="</about>" />
    </section>
  );
}