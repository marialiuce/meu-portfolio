import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function TypingTag({ tag }: { tag: string }) {
  return (
    <div 
      aria-hidden="true"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center font-mono text-xl md:text-2xl font-bold text-primary/30 select-none"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
        variants={containerVariants}
      >
        {tag.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`} 
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-[3px] h-6 md:h-7 bg-primary/30 ml-1"
      />
    </div>
  );
}