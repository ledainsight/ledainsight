import { useEffect, useRef } from 'react';

const caseStudies = [
  {
    image: '/images/case-study-1.jpg',
    category: 'Administrative Operations',
    title: 'From scattered to structured.',
    description:
      'An organization was running on manual processes with nothing connected. Communications were scattered, workflows had no system behind them, and the person leading it all was deep in administration instead of the work that actually mattered.',
    result:
      'We mapped how things were moving and built a digital operational system that brought everything into one place. Processes connected. Clarity replaced guesswork. Leadership had the structure to lead from, not manage from. The organization did not just get faster. It got lighter.',
  },
  {
    image: '/images/case-study-2.jpg',
    category: 'Stakeholder Management',
    title: 'Complexity managed. Delivery protected.',
    description:
      'This organization was holding together government agencies, development partners, and private sector stakeholders all at once. Large conferences, investment documentation, and multi-party coordination were all moving simultaneously.',
    result:
      'The complexity was not the problem. The absence of a system to hold it together was. We built the structure that made it manageable. Coordination, tracking, vendor management, and reporting sat within one operational framework. Engagements were delivered on schedule and leadership could make decisions with full visibility.',
  },
  {
    image: '/images/case-study-3.jpg',
    category: 'Workflow & Delivery',
    title: 'Structure before burnout.',
    description:
      'The person leading operations in this organization had become the system. Every decision moved through them. Every task lived in their head. The business was growing but the weight of running it was becoming unsustainable.',
    result:
      'We built the workflow structure that changed that. Tasks became trackable. Ownership became clear. Processes that previously lived in one person\'s capacity were documented, distributed, and functioning independently. The operational lead could finally step back from the day-to-day and into the work that actually needed their attention. Growth stopped feeling like a threat and started feeling possible again.',
  },
];

const CaseStudies = () => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      if (img && img.complete) {
        img.classList.add('loaded');
      }
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-off"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Our Work</p>
          <h2
            id="case-studies-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-6"
          >
            Everything feels lighter with the right structure.
          </h2>
          <p className="text-base md:text-lg text-ink-light leading-relaxed max-w-3xl mx-auto">
            Across different environments and engagements, the details vary. The
            pattern is almost always the same — things that should be working are
            not, and the reason is rarely the people. It is the structure. Here
            are three of those engagements.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="case-study-card"
              aria-labelledby={`case-title-${index}`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  ref={(el) => { imgRefs.current[index] = el; }}
                  src={study.image}
                  alt={`${study.category} case study illustration`}
                  className="img-lazy w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="340"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-ink/80 text-white text-xs font-semibold tracking-wider uppercase rounded">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={`case-title-${index}`}
                  className="font-serif text-xl md:text-2xl text-ink mb-4"
                >
                  {study.title}
                </h3>
                <p className="text-sm md:text-base text-ink-light leading-relaxed mb-4">
                  {study.description}
                </p>
                <p className="text-sm md:text-base text-ink-mid leading-relaxed">
                  {study.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
