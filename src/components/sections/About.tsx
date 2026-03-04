import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cat, Bike, MapPin, CodeXml, Heart,
  Palette, Dice6, BookOpen, Coffee, TerminalSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingTag from "@/components/layout/TypingTag";
import type { Hobby } from "@/types";
import perfilImg from "@/assets/images/perfil.JPG";

const hobbies: Hobby[] = [
  { id: 1,  icon: <TerminalSquare size={20} />, label: "Liu",                              position: "-top-4 left-[10%]",      delay: 0.1 },
  { id: 2,  icon: <MapPin size={20} />,         label: "Brasileira, 25 anos",              position: "-top-10 left-[35%]",     delay: 0.2 },
  { id: 3,  icon: <BookOpen size={20} />,       label: "Estudante de ADS",                 position: "-top-6 right-[10%]",     delay: 0.3 },
  { id: 4,  icon: <CodeXml size={20} />,        label: "Full Stack em formação",           position: "top-[15%] -right-16",    delay: 0.4 },
  { id: 5,  icon: <Heart size={20} />,          label: "Ama transformar ideias em código", position: "top-[40%] -right-28",    delay: 0.5 },
  { id: 6,  icon: <Dice6 size={20} />,          label: "RPG player",                       position: "bottom-[20%] -right-12", delay: 0.6 },
  { id: 7,  icon: <Bike size={20} />,           label: "Gosta de andar de bike",           position: "-bottom-4 right-[5%]",   delay: 0.7 },
  { id: 8,  icon: <Palette size={20} />,        label: "Faz crochê",                       position: "-bottom-10 left-[35%]",  delay: 0.8 },
  { id: 9,  icon: <Cat size={20} />,            label: "Tem 6 gatos e ama plantas",        position: "-bottom-2 left-[0%]",    delay: 0.9 },
  { id: 10, icon: <Coffee size={20} />,         label: "Coffee lover",                     position: "bottom-[20%] -left-16",  delay: 1.0 },
  { id: 11, icon: <CodeXml size={20} />,        label: "entre código e criatividade.",     position: "top-[20%] -left-24",     delay: 1.1 },
];

export default function About() {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        <div className="flex justify-center relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div
              className="w-full h-full overflow-hidden shadow-xl z-10 relative"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            >
              <img
                src={perfilImg}
                alt="Maria Alice"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:block">
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
                    delay: showHobbies ? hobby.delay : 0,
                  }}
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
        </div>

        <div className="flex flex-col space-y-6 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Sobre Mim</h2>

          <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Atualmente sou estudante de{" "}
              <span className="text-primary font-semibold">Análise e Desenvolvimento de Sistemas</span>{" "}
              e dedico minha rotina à construção de soluções reais.
            </p>
            <p>
              Minha porta de entrada na tecnologia foi a curiosidade de criança, explorando todos os tipos
              de jogos e querendo entender como aquilo era feito. O que me prendeu de verdade foi a paixão
              por criar. Descobri nesse universo a chance de unir{" "}
              <span className="text-primary font-semibold">criatividade e raciocínio lógico</span>{" "}
              para transformar ideias em aplicações funcionais.
            </p>
            <p>
              Hoje, sigo unindo{" "}
              <span className="text-primary font-semibold">lógica, criatividade e inovação</span>.
              Meu principal objetivo é me tornar{" "}
              <span className="text-primary font-semibold">desenvolvedora Full Stack</span>{" "}
              e desbravar o mundo através do código, criando sempre{" "}
              <span className="text-primary font-semibold">aplicações robustas e bem estruturadas</span>.
            </p>
          </div>

          <div className="pt-4 flex justify-center lg:justify-start">
            <Button
              onClick={() => setShowHobbies((prev) => !prev)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-serif transition-transform active:scale-95 shadow-md hover:shadow-lg"
            >
              {showHobbies ? "Ocultar detalhes" : "Descobrir mais sobre mim"}
            </Button>
          </div>

          <AnimatePresence>
            {showHobbies && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex md:hidden flex-wrap gap-2 justify-center lg:justify-start pt-2"
              >
                {hobbies.map((hobby, idx) => (
                  <motion.div
                    key={hobby.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-1.5 bg-background border border-primary text-primary px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm"
                  >
                    {hobby.icon}
                    <span>{hobby.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <TypingTag tag="</about>" />
    </section>
  );
}