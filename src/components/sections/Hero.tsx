import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypingTag from "@/components/layout/TypingTag";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hello"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center space-y-8 w-full"
      >
        <motion.span variants={item} className="text-xl md:text-2xl font-medium text-muted-foreground tracking-wide">
          Olá, eu sou
        </motion.span>

        <motion.h1 variants={item} className="text-6xl md:text-8xl font-serif font-bold text-primary leading-tight">
          Maria Alice <span className="italic font-normal text-primary/80">(Liu)</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          Desenvolvedora web apaixonada por tecnologia, em constante evolução para se tornar Full Stack.
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center space-x-6 pt-6">
          <a
            href="https://github.com/marialiuce"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/marialiuce"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:malyefx@gmail.com"
            className="p-4 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <FaEnvelope size={28} />
          </a>
        </motion.div>
      </motion.div>

      <TypingTag tag="</home>" />
    </section>
  );
}