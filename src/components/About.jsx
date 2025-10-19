import Section from './Section';
import ReactMarkdown from 'react-markdown';

export default function About({ data }) {
  return (
    <Section id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Me Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none tracking-tight">About me.</h1>
            </div>

            {/* Personal Story */}
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              {data.personalStory ? (
                data.personalStory.map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              ) : (
                <>
                  <p>Born and raised in Delhi.</p>
                  <p>I love to talk, laugh, and meet new people.</p>
                  <p>Coffee for breakfast, lunch, and dinner.</p>
                  <p>Positivity, Good vibes.</p>
                  <p>I'm a big fan of the 90s.</p>
                  <p>But I'm loyal to my era.</p>
                  <p>I feel life is ahead and more to explore.</p>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/webimage.jpg" 
                alt="Ravi Saxena" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Sections - Below the main hero */}
        <div className="mt-32 space-y-24">
          {/* Work-wise Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center">Work-wise</h2>
            
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6 text-gray-600 text-lg leading-relaxed">
                {data.workTraits ? (
                  data.workTraits.map((trait, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">{trait.trait}</span>
                        {trait.description && <span className="text-gray-600"> – {trait.description}</span>}
                      </div>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">Life-long learner</span>
                        <span className="text-gray-600"> – I don't know it all, but I'm happy to learn and grow (in my career and as a human being).</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">Problem solver</span>
                        <span className="text-gray-600"> – As a critical thinker, when problems arise, I always try to figure out the best course of action.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">Positive Perspective</span>
                        <span className="text-gray-600"> – I personally think this is a key part of being a good team player and a leader.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">Get-it-done attitude</span>
                        <span className="text-gray-600"> – I'm always thinking of how we can move projects forward and what's next.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-gray-800">Accountable</span>
                        <span className="text-gray-600"> - I take full ownership of my work and see it through to the finish line.</span>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Professional Summary */}
          {data.summary && (
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{data.title || 'Professional Journey'}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{data.summary}</p>
              
              {data.storyMd && (
                <div className="prose prose-gray prose-lg max-w-none text-gray-600 mt-6">
                  <ReactMarkdown>{data.storyMd}</ReactMarkdown>
                </div>
              )}
            </div>
          )}

          {/* Career Progression */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-4">
              <div className="text-lg text-gray-700 font-medium">Tech Lead → Incident Manager → AI Product Manager → AI Builder → Product Visionary</div>
              <div className="h-3 rounded-full bg-gray-200">
                <div className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 w-4/5 animate-[progress_2s_ease-in-out_forwards]"></div>
              </div>
              <style>
                {`@keyframes progress { from { width: 0% } to { width: 80% } }`}
              </style>
            </div>
          </div>

          {/* Resume Download - Moved below career progression */}
          <div className="text-center">
            <a 
              href="/Ravi Saxena_CV.docx" 
              download
              className="inline-block px-12 py-4 border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white transition-colors duration-300 tracking-wide"
            >
              VIEW MY RESUME
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}