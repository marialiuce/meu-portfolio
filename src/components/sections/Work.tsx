import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Experience, Project } from "@/types";
import { projects, experiences } from "@/data/portfolioData";

interface SelectableListProps {
  items: { id: string; label: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  ariaLabel: string;
  baseId: string;
}

function SelectableList({ items, selectedIndex, onSelect, ariaLabel, baseId }: SelectableListProps) {
  return (
    <ul 
      role="tablist" 
      aria-label={ariaLabel}
      className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide"
    >
      {items.map((item, idx) => {
        const isSelected = selectedIndex === idx;
        return (
          <li key={item.id} role="presentation" className="min-w-max md:min-w-0">
            <button
              role="tab"
              id={`tab-${baseId}-${idx}`}
              aria-selected={isSelected}
              aria-controls={`panel-${baseId}-${idx}`}
              onClick={() => onSelect(idx)}
              className={`w-full text-left px-4 py-3 rounded-sm font-mono text-sm transition-all duration-200 border-l-2 md:border-l-4 md:border-b-0 border-b-2 ${
                isSelected
                  ? "border-primary bg-primary/10 text-primary font-bold"
                  : "border-transparent text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-6"
    >
      <header className="flex flex-wrap items-center gap-4 justify-between">
        <h3 className="text-2xl md:text-3xl font-mono font-bold text-primary">
          {project.title}
        </h3>

        <div className="flex items-center gap-4">
          {project.linkGithub && project.linkGithub !== "#" && (
            <a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label={`Ver código fonte de ${project.title} no GitHub`}
            >
              <FaGithub size={24} />
            </a>
          )}
          {project.linkLive && project.linkLive !== "#" && (
            <a
              href={project.linkLive}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
              aria-label={`Acessar site ao vivo de ${project.title}`}
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </header>

      <p className="font-mono text-sm text-muted-foreground leading-relaxed flex gap-2">
        <span className="text-primary mt-1">▶</span> 
        <span>{project.description}</span>
      </p>

      <div className="font-mono text-sm flex gap-2 items-start mt-2">
        <span className="text-primary mt-1">▶</span>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-md text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceDetail({ experience }: { experience: Experience }) {
  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-5"
    >
      <h3 className="text-2xl md:text-3xl font-mono font-bold text-primary">
        {experience.role}
      </h3>

      <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
        {experience.period}
      </p>

      {Array.isArray(experience.description) ? (
        <ul className="flex flex-col gap-3">
          {experience.description.map((item, i) => (
            <li key={i} className="font-mono text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-mono text-sm text-muted-foreground leading-relaxed flex gap-2">
          <span className="text-primary mt-1">▶</span>
          <span>{experience.description}</span>
        </p>
      )}
    </motion.div>
  );
}

const GRID_CLASSES = "grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start";
const PANEL_CLASSES = "md:border-l border-border/50 md:pl-12 min-h-[220px]";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedExp, setSelectedExp] = useState(0);

  const projectItems = projects.map((p) => ({ id: p.id, label: p.title }));
  const experienceItems = experiences.map((e) => ({ id: e.id, label: e.company }));

  return (
    <section id="work" className="relative py-20 px-6 max-w-6xl mx-auto">
      
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 md:mb-16">
          Projetos:
        </h2>
        <div className={GRID_CLASSES}>
          <SelectableList
            items={projectItems}
            selectedIndex={selectedProject}
            onSelect={setSelectedProject}
            ariaLabel="Lista de Projetos Pessoais"
            baseId="proj"
          />
          <div 
            role="tabpanel"
            id={`panel-proj-${selectedProject}`}
            aria-labelledby={`tab-proj-${selectedProject}`}
            className={PANEL_CLASSES}
          >
            <AnimatePresence mode="wait">
              {projects[selectedProject] && (
                <ProjectDetail project={projects[selectedProject]} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 mb-24 w-1/2 mx-auto" />

      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 md:mb-16">
          Profissionais:
        </h2>
        <div className={GRID_CLASSES}>
          <SelectableList
            items={experienceItems}
            selectedIndex={selectedExp}
            onSelect={setSelectedExp}
            ariaLabel="Lista de Experiências Profissionais"
            baseId="exp"
          />
          <div 
            role="tabpanel"
            id={`panel-exp-${selectedExp}`}
            aria-labelledby={`tab-exp-${selectedExp}`}
            className={PANEL_CLASSES}
          >
            <AnimatePresence mode="wait">
              {experiences[selectedExp] && (
                <ExperienceDetail experience={experiences[selectedExp]} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}