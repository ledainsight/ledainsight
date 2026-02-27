const symptoms = [
  {
    title: 'The Hiring Paradox',
    description: 'New hires need constant management instead of lightening your load.',
  },
  {
    title: 'The Quality Lottery',
    description: 'Client results depend entirely on who touches the project.',
  },
  {
    title: 'The 60-Hour Ceiling',
    description: "Growth feels possible, but you're already at capacity.",
  },
];

const VacationTest = () => {
  return (
    <section id="vacation-test" className="py-24 px-4 sm:px-6 lg:px-8 bg-off" aria-labelledby="vacation-test-heading">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="vacation-test-heading" className="font-serif text-4xl lg:text-5xl text-stone-900 mb-6">
          The Real Test of Your Business
        </h2>
        <p className="text-xl text-stone-600 mb-12">
          Most founders think they&apos;re building a company. They&apos;re actually building a job that owns them.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl mb-16 text-left border border-stone-100">
          <p className="text-lg md:text-xl text-stone-800 leading-relaxed italic">
            Schedule a 2-week vacation starting tomorrow. No laptop. No &quot;just checking in.&quot; If your stomach just dropped,
            you don&apos;t have a business—you have a bottleneck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {symptoms.map((symptom) => (
            <article key={symptom.title} className="p-6 bg-white border border-stone-100 rounded-xl shadow-sm">
              <h3 className="font-serif text-2xl text-stone-900 mb-3">{symptom.title}</h3>
              <p className="text-stone-600 leading-relaxed">{symptom.description}</p>
            </article>
          ))}
        </div>

        <div className="space-y-6">
          <p className="text-xl font-medium text-stone-900">These aren&apos;t people problems. They&apos;re structure problems.</p>
          <a
            href="https://tally.so/r/68ddXJ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-full transition-all duration-200 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
          >
            Take the Diagnostic to Find Your Risk Level
          </a>
        </div>
      </div>
    </section>
  );
};

export default VacationTest;
