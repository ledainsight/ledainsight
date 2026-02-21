const FounderQuote = () => {
  return (
    <section
      className="relative py-20 md:py-28 quote-section"
      aria-labelledby="quote-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <blockquote>
            <p
              id="quote-heading"
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-white italic leading-relaxed mb-8"
            >
              "Every environment I have worked in has taught me the same thing —
              when the structure is right, everything else finds its place."
            </p>
          </blockquote>
          <footer>
            <p className="text-sm md:text-base font-semibold tracking-wider uppercase text-teal-400">
              Oluwabukunmi Bankole — Founder, Leda Services
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
