import Section from './Section';
import ReactMarkdown from 'react-markdown';

export default function Experience({ items }) {
  return (
    <Section id="experience">
      <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
      <div className="mt-8 grid gap-6">
        {items.map((exp, idx) => (
      <div key={idx} className="group p-5 rounded-xl border border-black/10 hover:border-accent transition-colors">
            <div className="flex items-center justify-between">
              <div className="font-medium">{exp.company} — {exp.role}</div>
              <div className="text-sm text-black">{exp.years}</div>
            </div>
            <div className="mt-3 text-sm text-black opacity-90 group-hover:opacity-100 prose">
              {exp.detailsMd ? <ReactMarkdown>{exp.detailsMd}</ReactMarkdown> : <p>{exp.details}</p>}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.skills.map((s, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-md bg-white border border-black/10">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}