const services = [
  {
    title: 'Operational Diagnostic',
    description:
      'We find exactly where things are breaking and why, so you stop guessing and start fixing the right things.',
  },
  {
    title: 'Workflow Automation',
    description:
      'We remove the manual repetitive work slowing down your processes so focus can be on what actually moves things onward.',
  },
  {
    title: 'Team Accountability',
    description:
      'We build the structure that tells everyone what they own, what is expected, and how progress gets tracked.',
  },
  {
    title: 'Communication Flow',
    description:
      'We build the delivery and processes your clients experience: consistent, simple.',
  },
  {
    title: 'End-to-End System Design',
    description:
      'We connect all the tools your organization runs on into one coherent system so nothing operates in isolation.',
  },
  {
    title: 'Operations Retainer',
    description:
      'We stay with you — maintaining, improving, and evolving your operations as your organization grows and changes.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 bg-off"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label">What We Do</p>
          <h2
            id="services-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-6"
          >
            Helping operations improve with clarity.
          </h2>
          <p className="text-base md:text-lg text-ink-light leading-relaxed">
            We design and build the internal systems your organization actually
            runs on. How work gets assigned. How it gets tracked. How it gets
            delivered. How you communicate and how your clients experience you.
          </p>
          <p className="text-base md:text-lg text-ink-light leading-relaxed mt-4">
            We come in, build what is missing, and stay as the operational
            partner that keeps everything running as you grow.
          </p>
          <p className="text-base md:text-lg text-ink leading-relaxed mt-6 font-medium">
            The result is an organization that holds its own — with or without
            you in every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <p className="section-label mb-8">How We Help</p>
          <p className="text-lg md:text-xl text-ink-mid mb-10 max-w-3xl">
            Every service Leda offers builds toward one thing — an organization
            that runs with clarity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className="service-card"
                tabIndex={0}
                aria-labelledby={`service-title-${index}`}
              >
                <h3
                  id={`service-title-${index}`}
                  className="font-serif text-xl text-ink mb-3"
                >
                  {service.title}
                </h3>
                <div className="w-12 h-px bg-border mb-4" aria-hidden="true" />
                <p className="text-sm md:text-base text-ink-light leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
