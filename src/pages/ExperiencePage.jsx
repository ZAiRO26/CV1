import Section from '../components/Section';
import Experience from '../components/Experience';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function ExperiencePage() {
  return (
    <Section id="experience-page">
      <Experience items={data.experience} />
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}