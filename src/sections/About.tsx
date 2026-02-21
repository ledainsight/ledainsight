import { useEffect, useRef } from 'react';

const About = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      img.classList.add('loaded');
    }
  }, []);

  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                ref={imgRef}
                src="/images/about-collaboration.jpg"
                alt="Two professionals collaborating at a desk, reviewing data on a laptop screen"
                className="img-lazy w-full rounded-lg shadow-xl object-cover"
                loading="lazy"
                width="800"
                height="600"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-6"
            >
              This is Leda
            </h2>

            <p className="text-lg md:text-xl text-ink-mid leading-relaxed mb-6">
              We help businesses stop being chaotic and start being clear.
            </p>

            <p className="text-base md:text-lg text-ink-light leading-relaxed mb-6">
              You know what you are building. You have the vision, the drive, and
              the clients. But somewhere in the middle of all of it, things
              started feeling heavier than they should.
            </p>

            <p className="text-base md:text-lg text-ink-light leading-relaxed mb-6">
              Maybe work keeps slipping. Maybe you are the one holding everything
              together. Maybe growth feels closer than ever but your current
              operations cannot quite carry it there.
            </p>

            <p className="text-base md:text-lg text-ink-light leading-relaxed">
              Leda comes in, finds where the clarity is missing, and builds the
              systems that replace confusion with structure your whole team can
              work from.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
