import { motion } from 'motion/react';
import { Search, PenTool, Layers, Sparkles } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Research',
    description: 'Understanding users, context, and requirements',
    color: 'bg-emerald-400',
    textColor: 'text-emerald-400',
  },
  {
    icon: PenTool,
    title: 'Wireframes',
    description: 'Sketching flows and structure',
    color: 'bg-pink-500',
    textColor: 'text-pink-500',
  },
  {
    icon: Layers,
    title: 'Prototypes',
    description: 'Building interactive experiences',
    color: 'bg-cyan-400',
    textColor: 'text-cyan-400',
  },
  {
    icon: Sparkles,
    title: 'Final UI',
    description: 'Polished, production-ready design',
    color: 'bg-yellow-400',
    textColor: 'text-yellow-400',
  },
];

export const DesignProcess = () => {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-2">
            Workflow
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
            Design Process
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A structured approach to solving design problems
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <motion.div
              className="h-full bg-neutral-300 dark:bg-neutral-700 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  className="bg-white dark:bg-neutral-950 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl relative overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-white dark:bg-neutral-900 border-4 border-white dark:border-neutral-950 flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    <span className={`text-sm font-bold ${step.textColor}`}>
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${step.color} mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="relative mt-12 h-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-emerald-400' :
                i % 4 === 1 ? 'bg-pink-500' :
                i % 4 === 2 ? 'bg-cyan-400' :
                'bg-yellow-400'
              } opacity-40`}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
              style={{
                left: `${15 + i * 14}%`,
                top: '50%',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
