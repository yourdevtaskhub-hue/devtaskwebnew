import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { useIsMobile } from '../hooks/useIsMobile';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const slides = [
    {
      title: language === 'el' ? 'Κατασκευή Μοντέρνων Ιστοσελίδων' : 'Modern Website Development',
      subtitle: language === 'el' 
        ? 'Δημιουργούμε responsive ιστοσελίδες με εστίαση στην απόδοση και UX' 
        : 'We create responsive websites with focus on performance and UX',
      gradient: 'from-blue-600 via-purple-600 to-teal-600',
      bgPattern: 'opacity-20'
    },
    {
      title: language === 'el' 
        ? 'Mobile Εφαρμογές για Επιχειρήσεις & Startups' 
        : 'Mobile-first Apps for Businesses & Startups',
      subtitle: language === 'el' 
        ? 'Native και cross-platform λύσεις για Android & iOS' 
        : 'Native and cross-platform solutions for Android & iOS',
      gradient: 'from-emerald-600 via-blue-600 to-purple-600',
      bgPattern: 'opacity-30'
    },
    {
      title: language === 'el' 
        ? 'Ο προγραμματιστής σας στην εποχή της τεχνολογίας' 
        : 'devtaskhub.com – Your developers in the age of technology',
      subtitle: language === 'el' 
        ? 'AI λύσεις, e-commerce και παιχνίδια που εντυπωσιάζουν' 
        : 'AI solutions, e-commerce and games that impress',
      gradient: 'from-blue-700 via-purple-700 to-teal-500', // πιο κοντά στα πρώτα δύο slides
      bgPattern: 'opacity-25'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="hero" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isMobile ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600' : ''}`}>
      {/* Animated Background, Floating Elements, Geometric Patterns, Scroll Indicator: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <>
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
              />
            </AnimatePresence>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"
              />
            </div>
            {/* Geometric Patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-4 h-4 bg-white transform rotate-45"></div>
              <div className="absolute top-40 right-32 w-6 h-6 bg-white rounded-full"></div>
              <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white transform rotate-45"></div>
              <div className="absolute bottom-20 right-20 w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </>
      )}
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          {/* Carousel Content */}
          {isMobile ? (
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">{slides[currentSlide].title}</h1>
              <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed opacity-90">{slides[currentSlide].subtitle}</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                {/* CTA Buttons: Εδώ μέσα για να εξαφανίζονται μαζί με το slide */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <motion.button
                    key="cta-services"
                    onClick={() => scrollToSection('services')}
                    className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span>{t.hero.cta}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <motion.button
                    key="cta-contact"
                    onClick={() => scrollToSection('contact')}
                    className="group bg-transparent text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center space-x-2 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Phone className="h-5 w-5" />
                    <span>{t.hero.contact}</span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
          {/* Carousel Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;