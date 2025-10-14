import { Github, Linkedin, Youtube } from 'lucide-react';

export default function Acta({ socials, resumeUrl }) {
  return (
    <div className="mt-12 pt-8 border-t border-black/10">
      <p className="text-sm text-black/60 mb-4 text-center">Find me on</p>
      <div className="flex items-center justify-center gap-4">
        <a 
          href={socials?.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 rounded-lg border border-black/20 hover:bg-black/5 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a 
          href={socials?.github} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 rounded-lg border border-black/20 hover:bg-black/5 transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
        <a 
          href={socials?.youtube} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 rounded-lg border border-black/20 hover:bg-black/5 transition-colors"
        >
          <Youtube className="h-5 w-5" />
        </a>
      </div>
      <div className="text-center">
        <a 
          href={resumeUrl || "/resume.pdf"} 
          download 
          className="inline-block mt-6 text-sm underline text-black/70 hover:text-black transition-colors"
        >
          Download CV (PDF)
        </a>
      </div>
    </div>
  );
}