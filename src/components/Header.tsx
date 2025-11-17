import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pendingSection && location.pathname === '/') {
      const el = document.getElementById(pendingSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setPendingSection(null);
    }
  }, [location.pathname, pendingSection]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Κλείνει πάντα το μενού
    if (location.pathname !== '/') {
      setPendingSection(sectionId);
      navigate('/');
      return;
    }
    // Αν είμαστε ήδη στην αρχική, κάνε scroll και force reflow αν χρειάζεται
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Ενημέρωσε το hash για να δουλεύει και σε mobile browsers
        window.location.hash = `#${sectionId}`;
      } else {
        // Αν δεν βρεθεί, δοκίμασε ξανά μετά από λίγο (για edge case)
        setTimeout(() => {
          const el2 = document.getElementById(sectionId);
          if (el2) {
            el2.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = `#${sectionId}`;
          }
        }, 300);
      }
    }, 0);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <motion.div 
            className="flex-shrink-0 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: 0, background: 'none', border: 'none' }}
            >
              <img src={logo} alt="DevTaskHub Logo" className="h-12 w-auto max-w-[120px] rounded-xl shadow-md transition-all duration-300 hover:shadow-xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">DevTaskHub</span>
            </motion.button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {Object.entries(t.nav).map(([key, label], index) => {
                // Προσθήκη του "Δείγματα App" μετά το portfolio
                if (key === 'portfolio') {
                  return (
                    <React.Fragment key={key}>
                      <motion.button
                        onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {label}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                      {/* Δείγματα App Button */}
                      <motion.button
                        onClick={() => scrollToSection('getfit-app-showcase')}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (index + 0.5) * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        Δείγματα App
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </React.Fragment>
                  );
                }
                return (
                  <motion.button
                    key={key}
                    onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {label}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Το κουμπί αλλαγής γλώσσας αφαιρείται */}
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-xl shadow-lg"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Object.entries(t.nav).map(([key, label], index) => {
                  // Προσθήκη του "Δείγματα App" μετά το portfolio στο mobile menu
                  if (key === 'portfolio') {
                    return (
                      <React.Fragment key={key}>
                        <motion.button
                          onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          {label}
                        </motion.button>
                        {/* Δείγματα App Button - Mobile */}
                        <motion.button
                          onClick={() => scrollToSection('getfit-app-showcase')}
                          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index + 0.5) * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          Δείγματα App
                        </motion.button>
                      </React.Fragment>
                    );
                  }
                  return (
                    <motion.button
                      key={key}
                      onClick={() => scrollToSection(key === 'home' ? 'hero' : key)}
                      className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {label}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;