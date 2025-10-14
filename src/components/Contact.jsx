import Section from './Section';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Youtube } from 'lucide-react';

export default function Contact({ socials, content }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(`Thanks, ${data.name}! I will reach out to ${data.email}.`);
    reset();
  };

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">{content?.heading || 'I like where this is headed.'}</h2>
        {content?.blurb && (
          <p className="mt-6 text-black/70 text-lg">{content.blurb}</p>
        )}
        {content?.quote && (
          <p className="mt-4 text-sm text-black/60">"{content.quote}"</p>
        )}
        {content?.email && (
          <p className="mt-2 text-sm text-black/60">
            You can hit me up here instead or shoot me an email at{' '}
            <a className="underline text-black" href={`mailto:${content.email}`}>{content.email}</a>
          </p>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              {...register('name', { required: true })} 
              placeholder={content?.placeholders?.name || 'Name'} 
              className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent" 
            />
            <input 
              {...register('email', { required: true })} 
              type="email" 
              placeholder={content?.placeholders?.email || 'Email'} 
              className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent" 
            />
          </div>
          
          <select className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent">
            <option>Select Reason</option>
            <option>Project Collaboration</option>
            <option>Job Opportunity</option>
            <option>General Inquiry</option>
            <option>Other</option>
          </select>
          
          <textarea 
            {...register('message', { required: true })} 
            placeholder={content?.placeholders?.message || 'What do you want to create together?'} 
            rows={6} 
            className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent resize-none" 
          />
          
          <button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 rounded-lg bg-black text-white font-medium hover:bg-black/90 transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
    </Section>
  );
}