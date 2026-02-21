import { Search, PenTool, Settings, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnostic',
    description:
      'We map how your organization currently operates and find exactly where clarity breaks down.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'We design a system built around how you actually work. Not a template. Not a guess.',
  },
  {
    icon: Settings,
    title: 'Build and Integrate',
    description:
      'We build it and integrate it into your operations until it holds on its own.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description:
      'We stay. Refining and keeping your operations clear as you grow.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="hidden lg:block">
            <div className="relative bg-gradient-to-br from-teal-100 to-teal-50 rounded-lg aspect-square flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-teal-200/50 animate-pulse" />
              </div>
              <Settings
                size={120}
                className="text-teal-600 relative z-10"
                strokeWidth={1}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="section-label">How It Works</p>
            <h2
              id="how-it-works-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-6"
            >
              Simple, Structured.
            </h2>
            <p className="text-base md:text-lg text-ink-light leading-relaxed mb-10">
              Our engagements follow a traceable path from the very first
              conversation. You always know where we are, what comes next, and
              what to expect.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={index}
                    className="flex gap-4"
                    aria-labelledby={`step-title-${index}`}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <Icon size={24} className="text-teal-600" />
                    </div>
                    <div>
                      <h3
                        id={`step-title-${index}`}
                        className="font-serif text-xl text-ink mb-2"
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-ink-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
