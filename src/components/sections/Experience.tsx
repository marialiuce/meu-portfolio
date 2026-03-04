import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypingTag from "../layout/TypingTag";
import { experiences } from "@/data/portfolioData";

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Profissionais:
          </h2>
        </div>

        <div className="grid grid-cols-[200px_1fr] md:grid-cols-[220px_1fr] gap-12 items-start">
          {/* Lista de Seleção */}
          <ul className="flex flex-col gap-1">
            {experiences.map((e, idx) => (
              <li key={e.id}>
                <button
                  onClick={() => setSelected(idx)}
                  className={`w-full text-left px-4 py-3 rounded-sm font-mono text-sm transition-all duration-200 ${
                    selected === idx
                      ? "bg-primary text-primary-foreground font-bold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {e.company}
                </button>
              </li>
            ))}
          </ul>

          {/* Painel de Detalhes */}
          <div className="border-l border-border/50 pl-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                {/* Cargo */}
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-primary">
                  {exp.role}
                </h3>

                {/* Período */}
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                  {exp.period}
                </p>

                {/* Descrição — suporta string simples ou array de tópicos */}
                {Array.isArray(exp.description) ? (
                  <ul className="flex flex-col gap-3">
                    {exp.description.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="font-mono text-sm text-muted-foreground leading-relaxed"
                      >
                        ▶ {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    ▶ {exp.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <TypingTag tag="</experience>" />
    </section>
  );
}