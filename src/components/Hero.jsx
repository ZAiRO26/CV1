import { motion } from 'framer-motion';
import { Mail, FileDown } from 'lucide-react';

export default function Hero({ data }) {
  return (
    <div className="pt-24">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
        <div className="inline-block rounded-full border px-4 py-1 text-xs border-black/20">
          AI-driven Product Manager & Creative Technologist
        </div>
        <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">{data.tagline}</h1>
        <p className="mt-4 text-black max-w-2xl mx-auto">{data.subheading}</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black border border-black/20 hover:bg-black/5">
            <FileDown className="h-4 w-4" /> Download Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-black/20 hover:bg-black/5">
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  );
}