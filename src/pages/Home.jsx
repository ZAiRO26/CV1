import Section from '../components/Section';
import Hero from '../components/Hero';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function Home() {
  return (
    <Section id="home" className="pt-8">
      <Hero data={data} />
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-black">{data.homeIntro}</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}