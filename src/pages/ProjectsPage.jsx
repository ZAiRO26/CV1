import Section from '../components/Section';
import Projects from '../components/Projects';
import Acta from '../components/Acta';
import data from '../content/site.json';

export default function ProjectsPage() {
  return (
    <Section id="projects-page">
      <Projects items={data.projects} title={data.projectsTitle} />
      <div className="max-w-2xl mx-auto">
        <Acta socials={data.socials} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}