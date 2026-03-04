import { motion } from "framer-motion";
import type { Skill } from "@/types";
import TypingTag from "@/components/layout/TypingTag";

const skills: Skill[] = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-6 max-w-6xl mx-auto">
      <div className="w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary tracking-wider">
            Minhas skills
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="h-16 w-16 md:h-20 md:w-20 mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-mono text-sm md:text-base text-primary/80 font-semibold text-center transition-colors duration-300 group-hover:text-primary">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <TypingTag tag="</skills>" />
    </section>
  );
}