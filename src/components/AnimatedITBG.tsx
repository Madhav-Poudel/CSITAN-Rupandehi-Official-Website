import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, Database } from 'lucide-react';

const icons = [Code, Cpu, Cloud, Database];

export default function AnimatedITBG() {
  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full overflow-hidden z-0">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 30 + i * 5,
            repeat: Infinity,
            repeatType: 'loop',
            delay: i * 3,
            ease: 'linear',
          }}
          className={`absolute text-primary/70 dark:text-primary/80`} 
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            fontSize: `${8 + i * 2}rem`,
            zIndex: 0,
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
