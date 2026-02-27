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
      className="relative min-h-screen pt-20 md:pt-24 pb-16 bg-stone-50"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-stone-900 leading-tight mb-6"
            >
              Can your business{' '}
              <span className="text-amber-700">survive</span> without you for 2 weeks?
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8 max-w-xl">
              LEDA builds the operational system that lets founders step back—without everything falling apart. We extract what's in your head, structure it, and hand your team a playbook they can actually run.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tally.so/r/68ddXJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-full transition-all duration-200 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 text-center"
              >
                Take the 2-Minute Diagnostic
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 text-base font-medium rounded-full border border-stone-200 transition-all duration-200 hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 text-center"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                ref={imgRef}
                src="/images/hero-founder.jpg"
                alt="LEDA Operations"
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
