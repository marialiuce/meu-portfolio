import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import TypingTag from "../layout/TypingTag";
import { projects } from "@/data/portfolioData";

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="w-full">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
            Projetos:
          </h2>
        </div>

        <div className="grid grid-cols-[200px_1fr] md:grid-cols-[220px_1fr] gap-12 items-start">
          {/* Lista de Seleção */}
          <ul className="flex flex-col gap-1">
            {projects.map((p, idx) => (
              <li key={p.id}>
                <button
                  onClick={() => setSelected(idx)}
                  className={`w-full text-left px-4 py-3 rounded-sm font-mono text-sm transition-all duration-200 ${
                    selected === idx
                      ? "bg-primary text-primary-foreground font-bold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {p.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Painel de Detalhes */}
          <div className="border-l border-border/50 pl-12 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                {/* Título do Projeto */}
                <h3 className="text-2xl md:text-3xl font-mono font-bold text-primary">
                  {project.title}
                </h3>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.linkGithub && project.linkGithub !== "#" && (
                    <a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.linkLive && project.linkLive !== "#" && (
                    <a
                      href={project.linkLive}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>

                {/* Descrição */}
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  ▶ {project.description}
                </p>

                {/* Tech Stack */}
                <p className="font-mono text-sm text-muted-foreground">
                  ▶ {project.techStack.join(", ")}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <TypingTag tag="</projects>" />
    </section>
  );
}