import Section from '../components/Section';
import Gallery from '../components/Gallery';
import data from '../content/site.json';

export default function GalleryPage() {
  return (
    <Section id="gallery-page">
      <Gallery data={data.gallery} />
    </Section>
  );
}