const testimonials = [
  {
    quote:
      'Before Leda, my WhatsApp was my to-do list. My team would ask me the same questions every week because nothing was documented. When someone was out sick, work just… stopped. Kunmi mapped how work actually moved through our organization, how it really happened, not how I thought it worked. We went through documenting our core processes, built a central knowledge base, and trained the team on the new structure. Now? I took a full week off last month. My phone barely rang. The business ran without me. That’s never happened before.',
    author: 'Creative Agency Founder',
    meta: 'Lagos, Nigeria • 8-person team',
    result: 'From scattered to structured',
  },
  {
    quote:
      'We were managing 12 different stakeholders on a single project. Client expectations weren’t aligned. Internal team didn’t know who was making decisions. Every meeting felt like starting over. Leda built us a stakeholder management framework with clear communication protocols, decision making hierarchies, status reporting structures. Actual templates and processes we could use immediately. The complexity didn’t go away. But now we have a system for managing it. Our client satisfaction scores went up 40% in two months.',
    author: 'Trade Organization Director',
    meta: 'Abuja, Nigeria • Multi-donor project',
    result: 'Complexity managed, delivery protected',
  },
  {
    quote:
      'I was working 60 hour weeks and still couldn’t keep up. Every client project required me personally. My team was capable, but they kept coming back to me for everything because there was no clear process to follow. We brought Leda in before I completely burned out. She designed our workflow and delivery systems from scratch, documented processes, quality checklists, client communication templates, team accountability structures. I’m down to 35 hours a week now. My team handles 80% of client work independently. And our delivery quality is more consistent than when I was doing everything myself.',
    author: 'Tech Services Founder',
    meta: 'Remote • 8-person team',
    result: 'Structure before burnout',
  },
];

const CaseStudies = () => {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-off" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label">Our Work</p>
          <h2 id="case-studies-heading" className="font-serif text-4xl lg:text-5xl text-ink mb-6">
            What Founders Say
          </h2>
          <p className="text-base md:text-lg text-ink-light leading-relaxed max-w-3xl mx-auto">
            These are some problems we solved and what changed after.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="case-study-card p-6 md:p-8 flex flex-col">
              <p className="text-stone-700 leading-relaxed mb-6">“{testimonial.quote}”</p>
              <p className="font-semibold text-stone-900">— {testimonial.author}</p>
              <p className="text-sm text-stone-500 mb-4">{testimonial.meta}</p>
              <p className="text-sm font-semibold text-teal-700">Result: {testimonial.result}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center space-y-4">
          <p className="text-stone-900 text-lg font-medium">Want similar results in your business?</p>
          <a
            href="https://calendly.com/bankolebukunmiprecious/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-full transition-all duration-200 hover:bg-stone-800"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
