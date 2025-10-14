import Section from './Section';

export default function Gallery({ data }) {
  return (
    <Section id="gallery">
      <h2 className="text-2xl md:text-3xl font-semibold">{data.title}</h2>
      <p className="mt-2 text-black">{data.subtitle}</p>
      {data.caption && (
        <p className="mt-2 text-sm text-black opacity-70">{data.caption}</p>
      )}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.images.map((src, i) => (
      <div key={i} className="relative overflow-hidden rounded-xl border border-black/10">
        <img src={src} alt="Gallery" className="w-full h-48 object-contain bg-white" />
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6">
        {data.videos.map((v, i) => (
      <div key={i} className="aspect-video rounded-xl overflow-hidden border border-black/10">
            <iframe
              title={v.title}
              src={v.url}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </Section>
  );
}