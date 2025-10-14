import Section from './Section';
import ReactMarkdown from 'react-markdown';

export default function About({ data }) {
  return (
    <Section id="about">
      <h2 className="text-2xl md:text-3xl font-semibold">{data.title || 'About'}</h2>
      <p className="mt-4 text-black max-w-3xl">{data.summary}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="prose">
          {data.storyMd ? (
            <ReactMarkdown>{data.storyMd}</ReactMarkdown>
          ) : (
            <p>{data.story}</p>
          )}
        </div>
        <div className="space-y-2">
          {/* Animated progression bar */}
          <div className="text-sm text-black">Technical Manager → AI Builder → Product Visionary</div>
          <div className="h-2 rounded-full bg-black/10">
            <div className="h-2 rounded-full bg-accent w-2/3 animate-[progress_2s_ease-in-out_forwards]"></div>
          </div>
          <style>
            {`@keyframes progress { from { width: 0% } to { width: 66% } }`}
          </style>
        </div>
      </div>
    </Section>
  );
}