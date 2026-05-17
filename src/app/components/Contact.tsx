import { motion } from 'motion/react';
import { Mail, Linkedin, Figma } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:kavyanshsaxena23@gmail.com',
    label: 'kavyanshsaxena23@gmail.com',
    color: 'bg-emerald-400',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/kavyansh-saxena-994a33292/',
    label: 'Connect on LinkedIn',
    color: 'bg-cyan-400',
  },
  {
    name: 'Figma',
    icon: Figma,
    href: 'https://figma.com/@kav3',
    label: 'View on Figma',
    color: 'bg-pink-500',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-wider uppercase text-emerald-400 font-semibold mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-neutral-50 mb-6">
            Let's work <span className="text-emerald-400 font-medium">together</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-white dark:bg-neutral-950 p-8 rounded-3xl border-2 border-neutral-200 dark:border-neutral-800 transition-colors shadow-lg">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${link.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                    {link.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-neutral-200 dark:border-neutral-800"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            © 2026 Kavyansh Saxena
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Designed with clarity and creativity in mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
