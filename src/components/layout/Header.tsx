import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { name: "Olá", target: "hello" },
  { name: "Sobre Mim", target: "about" },
  { name: "Habilidades", target: "skills" },
  { name: "Experiências", target: "work" }, 
];

const ThemeToggle = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => (
  <button
    onClick={toggleTheme}
    aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
    className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200"
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
);

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="font-serif text-xl font-bold text-primary cursor-pointer transition-transform hover:scale-105">
          <Link to="hello" smooth={true} duration={500}>
            Maria Alice.
          </Link>
        </div>

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

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="mailto:malyefx@gmail.com"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Fale Comigo
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen} 
            className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/40 absolute w-full left-0 top-16"
          >
            <nav className="flex flex-col px-6 py-8 gap-2 h-full">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-primary font-bold pl-2 border-l-2 border-primary" 
                  onClick={() => setMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary cursor-pointer transition-all text-base uppercase tracking-widest py-4 border-b border-border/20 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:malyefx@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="mt-6 px-5 py-3.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-base font-medium text-center shadow-md"
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

