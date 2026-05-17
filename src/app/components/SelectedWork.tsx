import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  focus: string;
  highlight: string;
  tags: string[];
  image: string;
  accentColor: string;
  link: string;
}

const projects: Project[] = [

  {
    id: 1,
    title: 'IET DAVV Website',
    description:
      'Full redesign of a college website serving 4000+ users',
    focus: 'UI',
    highlight:
      'Improved accessibility and structured information architecture',
    tags: ['UX', 'UI', 'Responsive'],
    image: '/images/iet1.png',
    accentColor: 'cyan',
    link: '/iet-davv',
  },
  {
    id: 2,
    title: 'Recruiters Connect',
    description:
      'Freelance project for a UAE-based client — Platform connecting recruiters and candidates',
    focus: 'Product',
    highlight:
      'Delivered a complete production-ready design based on real client requirements',
    tags: ['UX', 'UI', 'Freelance', 'Product'],
    image: '/images/rcc1.png',
    accentColor: 'violet',
    link: '/recruiters-connect',
  },
    {
    id: 3,
    title: 'LearnSphere',
    description: 'Personalized course roadmap generator',
    focus: 'UX',
    highlight:
      'Improved task completion efficiency and reduced drop-offs',
    tags: ['UX', 'UI', 'Product'],
    image: '/images/Frame 1.png',
    accentColor: 'emerald',
    link: '/LearnSphere',
  },
];

export function SelectedWork() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-2">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-6">
            Selected Work
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Real projects, real impact, real learning
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="block"
              style={{ textDecoration: 'none' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 dark:border-neutral-800 shadow-lg"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-3xl font-semibold text-neutral-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* HIGHLIGHT */}
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 mb-6 border border-neutral-200 dark:border-neutral-700">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      ✨ <span className="font-semibold">Impact:</span>{' '}
                      {project.highlight}
                    </p>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${
                      project.accentColor === 'emerald'
                        ? 'shadow-[0_0_120px_rgba(16,185,129,0.15)]'
                        : project.accentColor === 'cyan'
                        ? 'shadow-[0_0_120px_rgba(34,211,238,0.15)]'
                        : 'shadow-[0_0_120px_rgba(168,85,247,0.15)]'
                    }
                  `}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}