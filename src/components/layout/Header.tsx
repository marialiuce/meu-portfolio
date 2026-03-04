import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { name: "Olá", target: "hello" },
  { name: "Sobre & Hobbies", target: "about" },
  { name: "Habilidades", target: "skills" },
  { name: "Experiências", target: "experience" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="font-serif text-xl font-bold text-primary cursor-pointer">
          <Link to="hello" smooth={true} duration={500}>
            Maria Alice.
          </Link>
        </div>

        {/* Nav Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary font-semibold"
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-sm uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Toggle Dark/Light */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <a
            href="mailto:malyefx@gmail.com"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm"
          >
            Fale Comigo
          </a>
        </div>

        {/* Botões Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/40"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary font-semibold"
                  onClick={() => setMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-colors text-sm uppercase tracking-widest py-3 border-b border-border/20 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:malyefx@gmail.com"
                className="mt-3 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium text-center"
              >
                Fale Comigo
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

