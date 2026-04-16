import { motion } from 'motion/react';
import { Heart, Lightbulb, Users, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: Heart,
    label: 'User-Focused',
    color: 'bg-pink-500',
  },
  {
    icon: Lightbulb,
    label: 'Creative Thinking',
    color: 'bg-yellow-400',
  },
  {
    icon: Users,
    label: 'Team Player',
    color: 'bg-cyan-400',
  },
  {
    icon: Code2,
    label: 'Dev-Friendly',
    color: 'bg-emerald-400',
  },
];

export const About = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-2 text-center">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-16 text-center">
            A bit about me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I'm a designer focused on{' '}
                <span className="text-emerald-400 font-semibold">
                  clarity and usability
                </span>
                . I believe the best interfaces are the ones that fade into the background, letting users accomplish what they need without friction.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My experience spans real client projects and community initiatives, from designing for a UAE-based recruitment platform to leading design at{' '}
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  GDG
                </span>
                . I approach every project with structured thinking and attention to detail.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                With a foundation in both design and frontend development, I create designs that are not just beautiful, but{' '}
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  buildable and scalable
                </span>
                .
              </motion.p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="relative bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 transition-colors">
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
