const FounderQuote = () => {
  return (
    <section
      className="quote-section py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="founder-quote-heading"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(55, 65, 81, 0.78) 45%, rgba(6, 95, 70, 0.64) 100%), url('/images/FounderQuoteBG.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 id="founder-quote-heading" className="sr-only">
          Founder note
        </h2>

        <blockquote className="text-center border-l-4 border-teal-400 pl-6 md:pl-8 mb-12">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic leading-relaxed">
            “Every environment I have worked in has taught me the same thing — when the structure is right,
            everything else finds its place.”
          </p>
        </blockquote>

        <div className="max-w-4xl mx-auto text-gray-200 space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            I built Leda after years of growing in the same pattern: capable leaders drowning in operational
            chaos because the systems that worked at ₦10M broke at ₦50M.
          </p>
          <p>
            I&apos;ve seen brilliant people work 60 hour weeks because their organization couldn&apos;t function without
            them. I&apos;ve watched hiring make things worse because there was no structure to plug people into.
          </p>
          <p>
            Leda is my answer. We build operational infrastructure that lets founders actually lead instead of just
            managing chaos.
          </p>
          <p className="text-teal-300 font-semibold pt-2">Oluwabukunmi Bankole, Leda Services Ltd, Nigeria.</p>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
