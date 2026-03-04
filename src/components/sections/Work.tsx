import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Experience, Project } from "@/types";
import { projects, experiences } from "@/data/portfolioData";

interface SelectableListProps {
  items: { id: string; label: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

function SelectableList({ items, selectedIndex, onSelect }: SelectableListProps) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item, idx) => (
        <li key={item.id}>
          <button
            onClick={() => onSelect(idx)}
            className={`w-full text-left px-4 py-3 rounded-sm font-mono text-sm transition-all duration-200 ${
              selectedIndex === idx
                ? "bg-primary text-primary-foreground font-bold"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
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
      className="flex flex-col gap-5"
    >
      <h3 className="text-2xl md:text-3xl font-mono font-bold text-primary">
        {project.title}
      </h3>

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
            aria-label="Ver projeto"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>

      <p className="font-mono text-sm text-muted-foreground leading-relaxed">
        ▶ {project.description}
      </p>
      <p className="font-mono text-sm text-muted-foreground">
        ▶ {project.techStack.join(", ")}
      </p>
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
            <li key={i} className="font-mono text-sm text-muted-foreground leading-relaxed">
              ▶ {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-mono text-sm text-muted-foreground leading-relaxed">
          ▶ {experience.description}
        </p>
      )}
    </motion.div>
  );
}

const PANEL_CLASSES = "border-l border-border/50 pl-12 min-h-[220px]";
const GRID_CLASSES = "grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-12 items-start";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedExp, setSelectedExp] = useState(0);

  const projectItems = projects.map((p) => ({ id: p.id, label: p.title }));
  const experienceItems = experiences.map((e) => ({ id: e.id, label: e.company }));

  return (
    <section id="experience" className="relative py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16">
          Projetos:
        </h2>
        <div className={GRID_CLASSES}>
          <SelectableList
            items={projectItems}
            selectedIndex={selectedProject}
            onSelect={setSelectedProject}
          />
          <div className={PANEL_CLASSES}>
            <AnimatePresence mode="wait">
              <ProjectDetail project={projects[selectedProject]} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 mb-24" />

      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">
          Profissionais:
        </h2>
        <div className={GRID_CLASSES}>
          <SelectableList
            items={experienceItems}
            selectedIndex={selectedExp}
            onSelect={setSelectedExp}
          />
          <div className={PANEL_CLASSES}>
            <AnimatePresence mode="wait">
              <ExperienceDetail experience={experiences[selectedExp]} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}