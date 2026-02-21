import { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      img.classList.add('loaded');
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative"
      aria-labelledby="contact-heading"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-auto">
          <img
            ref={imgRef}
            src="/images/get-started.jpg"
            alt="Professional at conference table ready to discuss your operational needs"
            className="img-lazy absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width="800"
            height="1000"
            onLoad={(e) => e.currentTarget.classList.add('loaded')}
          />
        </div>

        {/* Content */}
        <div className="bg-ink py-16 md:py-24 px-8 md:px-12 lg:px-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Get Started
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Let's find where the clarity is missing.
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            In 30 minutes we will examine how your organization operates, pinpoint
            exactly where things are falling short, and show you the steps to
            improve.
          </p>

          <a
            href="https://calendly.com/bankolebukunmiprecious/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal inline-flex mb-8"
            aria-label="Schedule a 30-minute consultation call"
          >
            Let's have a talk
          </a>

          <p className="text-sm text-gray-400 mb-8">
            Not ready for a call yet?{' '}
            <a
              href="mailto:ledainsight@gmail.com?subject=Request: Operations Checklist"
              className="text-teal-400 hover:text-teal-300 transition-colors underline"
            >
              Request the free Operations Checklist
            </a>
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:ledainsight@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Send email to ledainsight@gmail.com"
            >
              <Mail size={18} aria-hidden="true" />
              <span className="text-sm">ledainsight@gmail.com</span>
            </a>
            <a
              href="tel:+2349054006581"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Call +234 905 400 6581"
            >
              <Phone size={18} aria-hidden="true" />
              <span className="text-sm">+234 905 400 6581</span>
            </a>
            <a
              href="https://linkedin.com/in/oluwabukunmi-bankole"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://substack.com/@penningwithprecious"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Read latest blog posts"
            >
              <ExternalLink size={18} aria-hidden="true" />
              <span className="text-sm">Latest from our blog</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
