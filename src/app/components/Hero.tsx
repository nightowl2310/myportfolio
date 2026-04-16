import { motion } from 'motion/react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          animate={{
            background: [
              'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
          animate={{
            background: [
              'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Cursor glow effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-emerald-400 opacity-20"
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + Math.random() * 40}%`,
          }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Animated ring around image */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-emerald-400 opacity-60 blur-2xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            />
            
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl">
              <img
                src="/images/kavyansh_saxena.png"
                alt="Kavyansh Saxena"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-emerald-400 text-neutral-900 px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Available for work</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.p
              className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              UI/UX Designer
            </motion.p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
              Kavyansh Saxena
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light max-w-2xl mb-8">
              Designing products that make{' '}
              <span className="text-emerald-400 font-medium">
                complex things feel simple
              </span>
            </p>

            <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mb-12 leading-relaxed">
              UI/UX designer focused on clarity, usability, and structured product thinking, with experience working on real client products
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToWork}
                className="group px-8 py-4 bg-emerald-400 text-neutral-900 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:bg-emerald-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                className="group px-8 py-4 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-50 rounded-full font-medium flex items-center gap-2 hover:border-emerald-400 dark:hover:border-emerald-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          className="w-[2px] h-16 bg-emerald-400 opacity-50"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};
