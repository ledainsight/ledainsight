import { Briefcase, Palette, Heart, User } from 'lucide-react';

const audiences = [
  {
    icon: Briefcase,
    title: 'Service Businesses',
  },
  {
    icon: Palette,
    title: 'Creatives',
  },
  {
    icon: Heart,
    title: 'Nonprofits',
  },
  {
    icon: User,
    title: 'Founder-Led Operations',
  },
];

const WhoWeWorkWith = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-teal-pale"
      aria-labelledby="audience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Who Leda Works With</p>
          <h2
            id="audience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-6 max-w-3xl mx-auto"
          >
            If delivering on your goals feels harder than it should, you are in
            the right place.
          </h2>
          <p className="text-base md:text-lg text-ink-light leading-relaxed max-w-3xl mx-auto">
            We work with founders, teams, and organizations who are doing the
            work but feel the weight of an operation that has not kept up. The
            industry changes. The feeling of uncertainty is almost always the
            same. Leda simplifies what is in the way and helps you move forward
            with confidence.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-lg p-6 text-center transition-all duration-200 hover:shadow-lg"
                tabIndex={0}
                aria-labelledby={`audience-title-${index}`}
              >
                <div
                  className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <Icon size={24} className="text-teal-600" />
                </div>
                <h3
                  id={`audience-title-${index}`}
                  className="font-serif text-lg text-ink"
                >
                  {audience.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
