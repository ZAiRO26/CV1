import Section from './Section';
import { useForm } from 'react-hook-form';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ content }) {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: `Thanks, ${data.name}! Your message has been sent successfully. I'll get back to you soon!` });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
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
          
          <select 
            {...register('reason')}
            className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent"
          >
            <option value="">Select Reason</option>
            <option value="Project Collaboration">Project Collaboration</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
          
          <textarea 
            {...register('message', { required: true })} 
            placeholder={content?.placeholders?.message || 'What AI product challenge can we solve together?'} 
            rows={6} 
            className="w-full px-4 py-3 rounded-lg border border-black/20 bg-white text-base focus:outline-none focus:border-accent resize-none" 
          />

          {/* Status Message */}
          {submitStatus && (
            <div className={`p-4 rounded-lg text-sm ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full md:w-auto px-8 py-3 rounded-lg font-medium transition-colors ${
              isSubmitting 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-black text-white hover:bg-black/90'
            }`}
          >
            {isSubmitting ? 'SENDING...' : 'SEND'}
          </button>
        </form>
      </div>
    </Section>
  );
}