import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../services/servicesData';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '../hooks/useIsMobile';
import {
  FaGlobe, FaMobileAlt, FaRobot, FaUsers, FaVideo, FaSearch, FaPhotoVideo, FaPalette, FaDatabase, FaBrain, FaShoppingCart, FaGamepad
} from 'react-icons/fa';

const iconColorMap: Record<string, string> = {
  'web-development': 'text-sky-400',
  'mobile-app-development': 'text-violet-400',
  'chatbots-ai-agents': 'text-pink-400',
  'social-media-management': 'text-emerald-400',
  'video-animation-production': 'text-orange-300',
  'seo-website-optimization': 'text-yellow-300',
  'multimedia-content-creation': 'text-fuchsia-400',
  'ux-ui-design': 'text-cyan-400',
  'database-cloud-infrastructure': 'text-indigo-400',
  'ai-integration-applications': 'text-pink-300',
  'ecommerce-development': 'text-green-400',
  'game-development': 'text-violet-300',
};

const iconMap: Record<string, React.ElementType> = {
  'web-development': FaGlobe,
  'mobile-app-development': FaMobileAlt,
  'chatbots-ai-agents': FaRobot,
  'social-media-management': FaUsers,
  'video-animation-production': FaVideo,
  'seo-website-optimization': FaSearch,
  'multimedia-content-creation': FaPhotoVideo,
  'ux-ui-design': FaPalette,
  'database-cloud-infrastructure': FaDatabase,
  'ai-integration-applications': FaBrain,
  'ecommerce-development': FaShoppingCart,
  'game-development': FaGamepad,
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' },
};

const Services: React.FC = () => {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  // Φιλτράρω το servicesData ώστε να μην εμφανίζεται το multimedia-content-creation
  // Στο mobile, αφαιρούμε επίσης: ai-integration-applications, seo-website-optimization, ux-ui-design
  const filteredServices = servicesData.filter(service => {
    if (service.slug === 'multimedia-content-creation') return false;
    if (isMobile) {
      if (service.slug === 'ai-integration-applications' || 
          service.slug === 'seo-website-optimization' || 
          service.slug === 'ux-ui-design') {
        return false;
      }
    }
    return true;
  });
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen"
      aria-label="Υπηρεσίες"
    >
      {/* Animated background shapes: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl z-0"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-2xl z-0"
            animate={{ scale: [1.1, 0.9, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">Υπηρεσίες</h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Εξειδικευμένες λύσεις για επιχειρήσεις και επαγγελματίες που απαιτούν κορυφαία ποιότητα, τεχνογνωσία και σύγχρονο design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, i) => {
            const Icon = iconMap[service.slug];
            const color = iconColorMap[service.slug] || 'text-sky-400';
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                tabIndex={0}
                aria-label={service.title[language]}
              >
                <div className={`mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-white to-blue-50 shadow-inner`}>{Icon && <Icon className={`text-4xl mb-1 drop-shadow ${color}`} />}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title[language]}
                </h3>
                <p className="text-gray-600 mb-6">{service.shortDescription[language]}</p>
                <span className="inline-flex items-center gap-1 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base group-hover:scale-105 group-hover:shadow-xl">
                  Περισσότερα →
                </span>
                {/* Animated border effect: ΜΟΝΟ σε desktop */}
                {!isMobile && (
                  <motion.div 
                    className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;