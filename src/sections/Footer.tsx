import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-ink border-t border-gray-800 py-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo-text.png"
              alt="Leda Services"
              className="h-6 w-auto opacity-80"
              loading="lazy"
            />
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:ledainsight@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Send email"
            >
              <Mail size={16} aria-hidden="true" />
              <span className="text-sm">ledainsight@gmail.com</span>
            </a>
            <a
              href="tel:+2349054006581"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <Phone size={16} aria-hidden="true" />
              <span className="text-sm">+234 905 400 6581</span>
            </a>
            <a
              href="https://linkedin.com/in/oluwabukunmi-bankole"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} aria-hidden="true" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://substack.com/@penningwithprecious"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Blog"
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span className="text-sm">Latest from our blog</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            Operational Clarity for Growing Organizations
            <br />
            Abuja, Nigeria · Since 2023 · &copy; {currentYear} Leda Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
