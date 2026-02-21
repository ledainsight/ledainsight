import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ProblemChecklist from './sections/ProblemChecklist';
import About from './sections/About';
import Services from './sections/Services';
import FounderQuote from './sections/FounderQuote';
import HowItWorks from './sections/HowItWorks';
import CaseStudies from './sections/CaseStudies';
import ProblemPatterns from './sections/ProblemPatterns';
import WhoWeWorkWith from './sections/WhoWeWorkWith';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackgroundBubbles from './components/BackgroundBubbles';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Animated Background */}
      <BackgroundBubbles />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <ProblemChecklist />
        <About />
        <Services />
        <FounderQuote />
        <HowItWorks />
        <CaseStudies />
        <ProblemPatterns />
        <WhoWeWorkWith />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
