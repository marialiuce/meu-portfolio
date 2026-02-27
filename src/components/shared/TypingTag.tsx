import { motion } from "framer-motion";

export default function TypingTag({ tag }: { tag: string }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center font-mono text-xl md:text-2xl font-bold text-primary/30 select-none">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {}
        }}
      >
        {tag.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
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