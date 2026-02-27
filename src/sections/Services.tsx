const offerings = [
  {
    title: 'Diagnostic Sprint',
    description:
      "We map how work actually moves through your business, identify where you're the bottleneck, and give you a prioritized action plan for the next 90 days.",
    listHeading: 'What you receive:',
    bullets: [
      'Current state assessment',
      '3 priority fixes ranked by impact',
      '90-day implementation roadmap',
    ],
    investment: 'INVESTMENT: ₦400,000 - ₦600,000',
    note: 'Final scope confirmed after discovery call',
    cta: 'Book Diagnostic Call',
  },
  {
    title: 'System Build',
    description:
      'We build the operational infrastructure you need—whether you’re preparing for your first hire or managing an existing team.',
    listHeading: 'What we build together:',
    bullets: [
      'Documented processes for recurring work',
      'Workflow tools and automation',
      'Team accountability structure',
      'Implementation support (and training if you have a team)',
      '3 months of implementation support',
    ],
    investment: 'INVESTMENT: ₦800K - ₦1.5M NGN',
    note: 'Based on team size and scope',
    cta: 'Discuss Your Build',
  },
  {
    title: 'Operations Partnership',
    description:
      "Ongoing operational support as you grow. We refine what's working, fix what's broken, and design new processes as you scale.",
    listHeading: "What's included:",
    bullets: [
      'Monthly system check-ins',
      'Process improvements as needed',
      'Priority support for urgent issues',
      'Quarterly strategic planning',
    ],
    investment: 'INVESTMENT: ₦500,000 - ₦700,000/month',
    note: '3-month minimum commitment',
    cta: 'Apply for Partnership',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">
            Three Ways to Work with LEDA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {offerings.map((offering) => (
            <article key={offering.title} className="flex flex-col p-8 rounded-2xl border border-stone-100 bg-off">
              <h3 className="font-serif text-3xl text-stone-900 mb-4">{offering.title}</h3>
              <p className="text-stone-700 leading-relaxed mb-5">{offering.description}</p>

              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-3">{offering.listHeading}</p>
              <ul className="space-y-2 text-stone-700 text-sm mb-6 list-disc list-inside">
                {offering.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-auto space-y-2 mb-6">
                <p className="text-xs font-semibold text-stone-700">{offering.investment}</p>
                <p className="text-xs text-stone-500">{offering.note}</p>
              </div>

              <a
                href="https://calendly.com/bankolebukunmiprecious/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 bg-stone-900 text-white hover:bg-stone-800"
              >
                {offering.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8 text-center space-y-2">
          <p className="text-stone-700">Leda works with businesses across Nigeria and internationally.</p>
          <p className="text-stone-600 text-sm">International clients: Pricing available in USD/EUR/GBP upon request.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
