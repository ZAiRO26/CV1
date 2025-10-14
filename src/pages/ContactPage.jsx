import Section from '../components/Section';
import Contact from '../components/Contact';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function ContactPage() {
  return (
    <Section id="contact-page">
      <Contact socials={data.socials} content={data.contact} />
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}