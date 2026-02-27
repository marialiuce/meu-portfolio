import { Link } from "react-scroll";

const navItems = [
  { name: "Olá", target: "hello" },
  { name: "Sobre & Hobbies", target: "about" },
  { name: "Habilidades", target: "skills" },
  { name: "Experiências", target: "experience" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <div className="font-serif text-xl font-bold text-primary cursor-pointer">
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

        <div className="hidden md:block">
           <a 
            href="mailto:seu.email@exemplo.com" 
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm"
           >
             Fale Comigo
           </a>
        </div>
        
      </div>
    </header>
  );
}