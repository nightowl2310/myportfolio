import { motion } from 'motion/react';
import { Code2, ArrowRight, Terminal, Palette } from 'lucide-react';

const technologies = [
  { name: 'React', color: 'bg-cyan-400' },
  { name: 'Next.js', color: 'bg-neutral-700' },
  { name: 'Tailwind CSS', color: 'bg-emerald-400' },
  { name: 'HTML/CSS', color: 'bg-pink-500' },
  { name: 'JavaScript', color: 'bg-yellow-400' },
];

export const DesignToCode = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Animated icon */}
          <motion.div className="relative inline-block mb-8">
            <motion.div
              className="relative w-24 h-24 rounded-3xl bg-emerald-400 flex items-center justify-center shadow-2xl"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Code2 className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>

          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-4">
            Frontend Awareness
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-6">
            Design <span className="text-emerald-400 font-medium">meets</span> Code
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-16 leading-relaxed">
            I understand how designs translate into real products. My frontend knowledge helps me create developer-friendly, production-ready designs that are both beautiful and buildable.
          </p>

          {/* Visual representation with bento-style layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {/* Design Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden group"
            >
              <Palette className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Design
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Clear structure, reusable components, and design systems that scale
              </p>
              
              {/* Decorative lines */}
              <div className="mt-6 space-y-2">
                {[60, 80, 45].map((width, i) => (
                  <motion.div
                    key={i}
                    className="h-2 rounded-full bg-pink-500 opacity-20"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Code Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden group"
            >
              <Terminal className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                Code
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Clean implementation with semantic HTML, maintainable CSS, and modern JavaScript
              </p>
              
              {/* Decorative code lines */}
              <div className="mt-6 space-y-2">
                {[70, 50, 85].map((width, i) => (
                  <motion.div
                    key={i}
                    className="h-2 rounded-full bg-cyan-400 opacity-20"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technologies with creative layout */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className={`px-6 py-3 rounded-2xl ${tech.color} text-white shadow-lg`}>
                    <span className="text-sm font-semibold">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow flow */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              Thoughtful Design
            </span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-5 h-5 text-emerald-400" />
            </motion.div>
            <span className="text-sm font-semibold text-emerald-400">
              Seamless Development
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
