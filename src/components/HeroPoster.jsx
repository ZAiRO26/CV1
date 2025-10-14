import { motion } from 'framer-motion';

export default function HeroPoster({ data }) {
  const words = (data.tagline || '').split(' | ');
  return (
    <section className="pt-4 md:pt-6">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-gray-200/60 bg-gradient-to-br from-white to-gray-50/30 shadow-lg"
        >
          <div className="relative h-[420px] sm:h-[500px] flex items-center">
            <div className="px-6 sm:px-10">
              <div className="space-y-2 leading-[0.95]">
                {words.map((w, i) => (
                  <div
                    key={i}
                    className="font-bold text-[clamp(32px,8vw,72px)] text-accent"
                  >
                    {w}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-black max-w-2xl mx-auto">
            {data.subheading}
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/Ravi Saxena_CV_2025.docx" download className="px-4 py-2 rounded-md bg-white text-black border border-black/20 hover:bg-gray-50 transition-colors">
              Download My CV
            </a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-black/20 hover:bg-black/5 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}