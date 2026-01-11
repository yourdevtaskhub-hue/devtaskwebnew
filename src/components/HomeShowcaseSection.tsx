import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaBolt, FaBullseye, FaTools, FaRocket } from 'react-icons/fa';
import { useIsMobile } from '../hooks/useIsMobile';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const HomeShowcaseSection: React.FC = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const t = translations[language];

  const bullets = [
    {
      icon: <FaGem className="text-cyan-500 text-2xl md:text-3xl animate-pulse" />,
      text: t.homeShowcase.bullets[0],
    },
    {
      icon: <FaBolt className="text-yellow-400 text-2xl md:text-3xl animate-bounce" />,
      text: t.homeShowcase.bullets[1],
    },
    {
      icon: <FaBullseye className="text-pink-500 text-2xl md:text-3xl animate-pulse" />,
      text: t.homeShowcase.bullets[2],
    },
    {
      icon: <FaTools className="text-indigo-500 text-2xl md:text-3xl animate-spin-slow" />,
      text: t.homeShowcase.bullets[3],
    },
    {
      icon: <FaRocket className="text-blue-500 text-2xl md:text-3xl animate-bounce" />,
      text: t.homeShowcase.bullets[4],
    },
  ];
  return (
    <section
      className="relative py-24 md:py-40 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      aria-label="Εντυπωσιακές Ιστοσελίδες"
    >
      {/* Enhanced Animated background gradients and shapes: ΜΟΝΟ σε desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-cyan-200/40 rounded-full blur-3xl z-0"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-200/40 via-purple-200/30 to-pink-200/40 rounded-full blur-2xl z-0"
            animate={{ scale: [1.1, 0.9, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          {/* Additional Premium Gradient Layers */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </>
      )}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Heading - Enhanced Premium Typography */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 drop-shadow-lg tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.homeShowcase.title}
          {!isMobile && (
            <motion.div
              className="h-1.5 w-40 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          )}
        </motion.h2>
        {/* Subheading - Enhanced */}
        <motion.p
          className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.homeShowcase.subtitle}
        </motion.p>
        {/* Bullets - Enhanced Premium Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16 w-full max-w-4xl mx-auto">
          {bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              <div className="flex items-center gap-5 glass-luxury-strong rounded-2xl shadow-luxury-lg border border-blue-100/50 hover:border-blue-200/80 px-8 py-6 text-lg font-medium text-gray-800 transition-all duration-300 backdrop-blur-xl">
                {/* Premium Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                />
                {/* Icon Container with Enhanced Glow */}
                <motion.span
                  className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-inner-luxury border border-white/50"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {b.icon}
                </motion.span>
                <span className="relative z-10 flex-1 text-left">{b.text}</span>
                {/* Subtle Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.li>
          ))}
        </ul>
        {/* CTA Button - Enhanced Premium Design */}
        <motion.a
          href="#portfolio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-block px-12 py-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-luxury-xl hover:shadow-premium-glow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden group"
        >
          {/* Animated Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.7 }}
          />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {t.homeShowcase.cta}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              →
            </motion.span>
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default HomeShowcaseSection;
