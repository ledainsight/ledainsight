import { ArrowRight } from 'lucide-react';

const patterns = [
  {
    title: 'The Vacation Test',
    description:
      'You tried to take time off. Within hours, your phone was buzzing. By day 2, you gave up and opened your laptop.',
    problem: 'Everything lives in your head. No documented processes. No systems.',
    link: 'https://substack.com/@penningwithprecious',
  },
  {
    title: 'The Hiring Paradox',
    description:
      'You hired someone to lighten your load. Three months later, you\'re working more hours managing them.',
    problem: 'You handed them responsibility without systems to succeed.',
    link: 'https://substack.com/@penningwithprecious',
  },
  {
    title: 'The Quality Lottery',
    description:
      'Client experience depends entirely on who handles their project. Same service, wildly different results.',
    problem: 'No standardized delivery. Success depends on individuals, not systems.',
    link: 'https://substack.com/@penningwithprecious',
  },
];

const ProblemPatterns = () => {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="patterns-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="patterns-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-4"
          >
            Recognize Yourself?
          </h2>
          <p className="text-base md:text-lg text-ink-light">
            Common patterns we see before organizations find clarity
          </p>
        </div>

        {/* Patterns Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {patterns.map((pattern, index) => (
            <article
              key={index}
              className="pattern-card"
              aria-labelledby={`pattern-title-${index}`}
            >
              <h3
                id={`pattern-title-${index}`}
                className="font-serif text-xl text-ink mb-3"
              >
                {pattern.title}
              </h3>
              <p className="text-sm md:text-base text-ink-mid leading-relaxed mb-4">
                {pattern.description}
              </p>
              <p className="text-sm text-ink-light italic mb-4">
                The problem: {pattern.problem}
              </p>
              <a
                href={pattern.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors"
                aria-label={`Read the full story about ${pattern.title}`}
              >
                Read the full story
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl text-ink mb-6">
            These are structure problems.
          </p>
          <a
            href="https://calendly.com/bankolebukunmiprecious/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
            aria-label="Schedule a call to fix your structure problems"
          >
            Let's fix yours
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemPatterns;
