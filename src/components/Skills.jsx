import Section from './Section';

export default function Skills({ skills, certifications }) {
  return (
    <Section id="skills">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills & Tools</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {skills.map((group, idx) => (
      <div key={idx} className="p-5 rounded-xl border border-black/10">
            <div className="font-medium">{group.category}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-white border border-black/10">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="text-sm text-black">Certifications</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {certifications.map((c, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-md bg-white border border-black/10">{c}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}