import { motion } from 'motion/react';
import { ArrowUpRight, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  focus: string;
  highlight: string;
  tags: string[];
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LearnSphere',
    description: 'Personalized course roadmap generator',
    focus: 'UX flows, personalization, and structured user journeys',
    highlight: 'Improved task completion efficiency and reduced drop-offs',
    tags: ['UX', 'UI', 'Product'],
    image: 'https://images.unsplash.com/photo-1670231200760-efbbfc4a79e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhcm5pbmclMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc2MTk3Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    accentColor: 'pink-500',
  },
  {
    id: 2,
    title: 'IET DAVV Website',
    description: 'Full redesign of a college website serving 4000+ users',
    focus: 'Navigation clarity, responsive design, and mobile-first UI',
    highlight: 'Improved accessibility and structured information architecture',
    tags: ['UX', 'UI', 'Responsive'],
    image: 'https://images.unsplash.com/photo-1549861833-7a62a4a84484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2xsZWdlJTIwY2FtcHVzJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NzYxOTczODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    accentColor: 'cyan-400',
  },
  {
    id: 3,
    title: 'Recruiters Connect',
    description: 'Freelance project for a UAE-based client — Platform connecting recruiters and candidates',
    focus: 'Simplifying hiring flows, improving discoverability, and maintaining clean UI consistency',
    highlight: 'Delivered a complete production-ready design based on real client requirements',
    tags: ['UX', 'UI', 'Freelance', 'Product'],
    image: 'https://images.unsplash.com/photo-1762330466678-45b42e02f5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWNydWl0bWVudCUyMGhpcmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3NjE5NzM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    accentColor: 'emerald-400',
  },
];

export const SelectedWork = () => {
  return (
    <section id="work" className="py-32 px-6 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Real projects, real impact, real learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <motion.div
                className="group relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 dark:border-neutral-800 shadow-lg"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating icons on hover */}
                  <motion.div
                    className={`absolute top-6 right-6 w-12 h-12 bg-${project.accentColor} rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Highlight badge */}
                  <motion.div
                    className={`absolute bottom-4 left-4 bg-${project.accentColor} text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg`}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                  >
                    <Zap className="w-3 h-3" />
                    Case Study
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-${project.accentColor} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Highlight */}
                  <div className="mb-4 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      <span className="font-semibold">✨ Impact:</span> {project.highlight}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
