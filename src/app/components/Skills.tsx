import { motion } from 'motion/react';
import { Palette, Wrench, Code } from 'lucide-react';

const skillCategories = [
  {
    category: 'UI/UX',
    icon: Palette,
    color: 'bg-pink-500',
    skills: [
      { name: 'Wireframing', level: 95 },
      { name: 'Prototyping', level: 90 },
      { name: 'User Flows', level: 92 },
      { name: 'Usability Testing', level: 85 },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    color: 'bg-yellow-400',
    skills: [
      { name: 'Figma', level: 98 },
      { name: 'Framer', level: 88 },
      { name: 'Adobe Photoshop', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    icon: Code,
    color: 'bg-cyan-400',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 80 },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-2">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50">
            Skills & Abilities
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="relative"
            >
              <motion.div
                className="relative bg-white dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                    {category.category}
                  </h3>
                </div>

                {/* Skills with animated progress bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                        <motion.span
                          className={`text-xs font-semibold ${category.color === 'bg-pink-500' ? 'text-pink-500' : category.color === 'bg-yellow-400' ? 'text-yellow-400' : 'text-cyan-400'}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Progress bar background */}
                      <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${category.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: categoryIndex * 0.15 + skillIndex * 0.1 + 1,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="relative mt-20 h-32">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 rounded-full ${
                i % 3 === 0 ? 'bg-pink-500' :
                i % 3 === 1 ? 'bg-yellow-400' :
                'bg-cyan-400'
              } opacity-30`}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              style={{
                left: `${10 + i * 11}%`,
                top: '50%',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
