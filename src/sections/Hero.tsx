import { useEffect, useRef } from 'react';

const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      img.classList.add('loaded');
    }
  }, []);

  return (
    <section
      className="relative min-h-screen pt-20 md:pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink leading-tight mb-6"
            >
              Your business is{' '}
              <span className="italic text-teal-600">ready</span> for this.
            </h1>

            <p className="text-lg md:text-xl text-ink-mid leading-relaxed mb-4 max-w-xl">
              Something keeps breaking and you are not sure what. The team is
              there. The work is coming in. But nothing feels in control.
            </p>

            <p className="text-lg md:text-xl text-ink-mid leading-relaxed mb-8 max-w-xl">
              Leda finds what is missing and builds the clarity your business
              runs on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/bankolebukunmiprecious/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
                aria-label="Schedule a 30-minute consultation call"
              >
                Let's have a talk
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary text-center"
                aria-label="Learn how Leda works"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={imgRef}
                src="/images/hero-founder.jpg"
                alt="Oluwabukunmi Bankole, Founder of Leda Services, at her desk with project management dashboard visible on computer screen"
                className="img-lazy w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-2xl object-cover"
                loading="eager"
                width="600"
                height="800"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
