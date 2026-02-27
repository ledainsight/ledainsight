const steps = [
  {
    number: '01',
    title: 'Diagnostic',
    timeframe: 'Week 1',
    action: 'Map how work moves, find where you become the bottleneck',
    outcome: "Stop guessing what's broken; know precisely what to fix",
  },
  {
    number: '02',
    title: 'Design',
    timeframe: 'Week 2',
    action: 'Architect your operating system—who owns what, how decisions get made',
    outcome: 'Blueprint for a business that runs without your daily involvement',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    timeframe: 'Weeks 3-4',
    action: 'Document core processes, build workflow automation, train team',
    outcome: 'Team operates from systems, not your inbox',
  },
  {
    number: '04',
    title: 'Partnership',
    timeframe: 'Ongoing',
    action: 'Refine systems as you grow, catch bottlenecks before they break',
    outcome: 'Sustainable growth without founder burnout',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-6"
          >
          From Chaos to Clarity: The 8-Week Transformation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-amber-700 font-serif text-4xl mb-4">{step.number}</div>
              <h3 className="font-serif text-2xl text-stone-900 mb-2">{step.title}</h3>
              <div className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-4">
                {step.timeframe}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase mb-1">Action</div>
                  <p className="text-stone-700 text-sm leading-relaxed">{step.action}</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase mb-1">Outcome</div>
                  <p className="text-stone-900 font-medium text-sm leading-relaxed">
                    {step.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
