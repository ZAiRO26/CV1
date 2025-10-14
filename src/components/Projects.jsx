import Section from './Section';
import { motion } from 'framer-motion';

export default function Projects({ items, title = 'AI & Creative Projects' }) {
  return (
    <Section id="projects">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, idx) => (
          <motion.a
            key={idx}
            href={p.link}
            className="group block rounded-xl border border-black/10 p-5 hover:shadow-md hover:border-accent transition"
            whileHover={{ scale: 1.01 }}
          >
            <div className="font-medium">{p.title}</div>
            <div className="mt-2 text-sm text-black">{p.description}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tools.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-white border border-black/10">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}