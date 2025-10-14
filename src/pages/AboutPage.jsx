import Section from '../components/Section';
import About from '../components/About';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function AboutPage() {
  return (
    <Section id="about-page">
      <About data={data.about} />
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}