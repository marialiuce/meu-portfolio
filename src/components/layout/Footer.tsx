import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground font-mono text-sm">
        <p>
          Desenvolvido em{" "}
          <span className="text-primary font-semibold">React.js</span> e{" "}
          <span className="text-primary font-semibold">TypeScript</span> por{" "}
          <span className="text-primary font-semibold">Maria Alice</span>
        </p>

        <a
          href="https://github.com/marialiuce/meu-portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <FaGithub size={18} />
          <span>Ver no GitHub</span>
        </a>
      </div>
    </footer>
  );
}