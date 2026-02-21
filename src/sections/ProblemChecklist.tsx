import { useState } from 'react';
import { Check } from 'lucide-react';

const problems = [
  'Your phone never stops buzzing, even on your days off',
  'Hiring more help somehow made you busier',
  'You answer the same questions week after week',
  'Results change depending on who handles the work',
  'Growing your business feels overwhelming, not exciting',
];

const ProblemChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setCheckedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const checkedCount = checkedItems.length;

  return (
    <section
      className="relative py-20 md:py-28 bg-teal-pale"
      aria-labelledby="checklist-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label">Not Sure If You Need Help?</p>
        <h2
          id="checklist-heading"
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-12"
        >
          You might need operational support if:
        </h2>

        <div className="space-y-4 mb-10">
          {problems.map((problem, index) => (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className={`w-full flex items-center gap-4 p-4 md:p-5 text-left rounded-lg border-2 transition-all duration-200 ${
                checkedItems.includes(index)
                  ? 'bg-white border-teal-600 shadow-md'
                  : 'bg-white/50 border-transparent hover:bg-white hover:border-teal-200'
              }`}
              aria-pressed={checkedItems.includes(index)}
              aria-label={`${problem}. Click to toggle.`}
            >
              <span
                className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                  checkedItems.includes(index)
                    ? 'bg-teal-600 border-teal-600'
                    : 'border-ink-light'
                }`}
                aria-hidden="true"
              >
                {checkedItems.includes(index) && (
                  <Check size={16} className="text-white" />
                )}
              </span>
              <span className="text-base md:text-lg text-ink-mid">{problem}</span>
            </button>
          ))}
        </div>

        {checkedCount >= 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-lg md:text-xl font-medium text-ink mb-6">
              If you checked 2+, these are structure problems.
            </p>
            <a
              href="#services"
              className="btn-primary inline-flex"
              aria-label="See how Leda fixes structure problems"
            >
              See how we fix this
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProblemChecklist;
