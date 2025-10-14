import Section from '../components/Section';
import Skills from '../components/Skills';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function SkillsPage() {
  return (
    <Section id="skills-page">
      <Skills skills={data.skills} certifications={data.certifications} />
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}