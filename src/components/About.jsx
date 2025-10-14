import Section from './Section';
import ReactMarkdown from 'react-markdown';

export default function About({ data }) {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        {/* Main About Me Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">About me.</h1>
        </div>

        {/* Personal Story */}
        <div className="mb-16">
          <div className="text-base text-gray-600 leading-relaxed space-y-4 max-w-3xl">
            {data.personalStory ? (
              data.personalStory.map((line, index) => (
                <p key={index}>{line}</p>
              ))
            ) : (
              <>
                <p>Born and raised in Gurgaon.</p>
                <p>I love to talk, laugh, and meet new people.</p>
                <p>Coffee fan. Breakfast, lunch, and dinner.</p>
                <p>Probably. Good vibes.</p>
                <p>I'm a big fan of the 90s.</p>
                <p>But I'm loyal to my era.</p>
                <p>But more of my life is ahead.</p>
              </>
            )}
          </div>
        </div>

        {/* Work-wise Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-8 text-center">Work-wise</h2>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-3 text-gray-600 text-base leading-relaxed">
              {data.workTraits ? (
                data.workTraits.map((trait, index) => (
                  <li key={index} className="list-disc ml-6">
                    <span className="font-medium">{trait.trait}</span> – {trait.description}
                  </li>
                ))
              ) : (
                <>
                  <li className="list-disc ml-6">
                    <span className="font-medium">Life-long learner</span> – I don't know it all, but I'm happy to learn and grow (in my career and as a human being).
                  </li>
                  <li className="list-disc ml-6">
                    <span className="font-medium">Problem solver</span> – As a critical thinker, when problems arise, I always try to figure out the best course of action.
                  </li>
                  <li className="list-disc ml-6">
                    <span className="font-medium">Positive Patty</span> – I personally think this is a key part of being a good team player and a leader.
                  </li>
                  <li className="list-disc ml-6">
                    <span className="font-medium">Get-it-done attitude</span> – I'm always thinking of how we can move projects forward and what's next.
                  </li>
                  <li className="list-disc ml-6">
                    <span className="font-medium">Accountable</span> - I take full ownership of my work and see it through to the finish line.
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-600 mb-4">{data.title || 'Professional Journey'}</h3>
          <p className="text-base text-gray-600 leading-relaxed mb-6">{data.summary}</p>
          
          {data.storyMd && (
            <div className="prose prose-gray max-w-none text-base text-gray-600">
              <ReactMarkdown>{data.storyMd}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Career Progression */}
        <div className="mb-16">
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Technical Manager → AI Builder → Product Visionary</div>
            <div className="h-2 rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-black w-2/3 animate-[progress_2s_ease-in-out_forwards]"></div>
            </div>
            <style>
              {`@keyframes progress { from { width: 0% } to { width: 66% } }`}
            </style>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center">
          <a 
            href="/Ravi Saxena_CV_2025.docx" 
            download
            className="inline-block px-8 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            VIEW MY RESUME
          </a>
        </div>
      </div>
    </Section>
  );
}