import { motion } from 'framer-motion';
import { Mail, FileDown } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

export default function Hero({ data }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-16 overflow-hidden">
      {/* Background Layer - Slowest parallax */}
      <Parallax speed={-50} className="absolute inset-0 parallax-layer">
        <div 
          className="w-full h-[150vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-network-bg.svg')`,
          }}
        />
      </Parallax>

      {/* Middle Layer - Dark overlay with medium parallax */}
      <Parallax speed={-30} className="absolute inset-0 parallax-layer">
        <div className="w-full h-[130vh] bg-black/40 backdrop-blur-[0.5px]"></div>
      </Parallax>
      
      {/* Foreground Layer - Text content with fastest parallax */}
      <Parallax speed={-15} className="container mx-auto px-6 max-w-4xl text-center relative z-10 parallax-layer">
        <motion.div 
          initial={{ opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center"
        >
          <div className="inline-block rounded-full border px-4 py-1 text-xs border-white/30 bg-white/10 backdrop-blur-sm text-white">
            AI-driven Product Manager & Creative Technologist
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-white">{data.tagline}</h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">{data.subheading}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="/Ravi Saxena_CV.docx"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black border border-white/20 hover:bg-gray-100 transition-colors touch-manipulation min-h-[48px] w-full sm:w-auto justify-center"
            >
              <FileDown className="h-4 w-4" /> Download Resume
            </motion.a>
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 hover:bg-white/10 transition-colors text-white touch-manipulation min-h-[48px] w-full sm:w-auto justify-center"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </motion.a>
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
}