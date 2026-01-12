import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaMobileAlt, FaCogs, FaSyncAlt, FaCreditCard, FaBoxes, FaSearch, FaStore, FaLaptop, FaUsers, FaGlobe, FaLanguage, FaChevronLeft, FaChevronRight, FaCheckCircle, FaRocket, FaChartLine } from 'react-icons/fa';
import { SiWoocommerce, SiShopify, SiMagento, SiLaravel, SiNextdotjs, SiStripe, SiPaypal, SiVuedotjs, SiGraphql, SiContentful } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
// import cartLottie from '../assets/lottie-cart.json';
const cartLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// Εισαγωγές εικόνων/εικονιδίων αν χρειάζεται
import cartImg from '../assets/apps.jpg';
import appsImg from '../assets/e-shop.jpg';
import clinicImg from '../assets/clinic.png';
import hydrogenImg from '../assets/hydrogen.png';
import hotelImg from '../assets/Hotel.png';
import cryptoImg from '../assets/crypto.png';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

// Icon arrays for offers
const offerIcons = [
  <FaStore className="text-blue-500 text-3xl" />,
  <FaMobileAlt className="text-purple-500 text-3xl" />,
  <FaCogs className="text-pink-500 text-3xl" />,
  <FaSyncAlt className="text-cyan-500 text-3xl" />,
  <FaCreditCard className="text-green-500 text-3xl" />,
  <FaBoxes className="text-yellow-500 text-3xl" />,
  <FaSearch className="text-blue-400 text-3xl" />
];

// Icon arrays for useCases
const useCaseIcons = [
  <FaLaptop className="text-blue-500 text-3xl" />,
  <FaUsers className="text-purple-500 text-3xl" />,
  <FaStore className="text-pink-500 text-3xl" />,
  <FaGlobe className="text-cyan-500 text-3xl" />
];

// Icon arrays for uxFocus
const uxFocusIcons = [
  <FaMobileAlt className="text-blue-500 text-2xl" />,
  <FaRocket className="text-purple-500 text-2xl" />,
  <FaBoxes className="text-green-500 text-2xl" />,
  <FaCheckCircle className="text-pink-500 text-2xl" />
];

// TechTabs icons arrays (hardcoded as they are technology names)
const techTabsIcons = [
  [
    { icon: <SiWoocommerce className="text-purple-700 text-4xl" />, name: 'WooCommerce' },
    { icon: <SiShopify className="text-green-500 text-4xl" />, name: 'Shopify' },
    { icon: <SiMagento className="text-orange-500 text-4xl" />, name: 'Magento' },
    { icon: <SiLaravel className="text-red-500 text-4xl" />, name: 'Laravel' },
    { icon: <SiNextdotjs className="text-gray-900 text-4xl" />, name: 'Next.js' },
  ],
  [
    { icon: <SiStripe className="text-blue-500 text-4xl" />, name: 'Stripe' },
    { icon: <SiPaypal className="text-blue-700 text-4xl" />, name: 'PayPal' },
    { icon: <FaCreditCard className="text-green-500 text-4xl" />, name: 'Viva Wallet' },
    { icon: <FaChartLine className="text-purple-500 text-4xl" />, name: 'Skroutz Analytics' },
  ],
  [
    { icon: <FaSyncAlt className="text-cyan-500 text-4xl" />, name: 'RESTful APIs' },
    { icon: <SiGraphql className="text-pink-500 text-4xl" />, name: 'GraphQL' },
    { icon: <SiContentful className="text-blue-400 text-4xl" />, name: 'Headless CMS' },
  ]
];

export default function EcommerceDevelopmentPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [typed, setTyped] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);
  
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  
  // Typing effect για το hero
  useEffect(() => {
    const full = t.services.pages.ecommerceDevelopment.hero.subtitle;
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [t.services.pages.ecommerceDevelopment.hero.subtitle]);

  // Offers array with useMemo
  const offers = useMemo(() => 
    t.services.pages.ecommerceDevelopment.offers.items.map((item, idx) => ({
      icon: offerIcons[idx],
      title: item.title,
      desc: item.desc
    })), [t]);

  // TechTabs array with useMemo
  const techTabs = useMemo(() =>
    t.services.pages.ecommerceDevelopment.technologies.tabs.map((tab, idx) => ({
      label: tab.label,
      icons: techTabsIcons[idx]
    })), [t]);

  // UseCases array with useMemo
  const useCases = useMemo(() =>
    t.services.pages.ecommerceDevelopment.useCases.items.map((item, idx) => ({
      icon: useCaseIcons[idx],
      title: item.title,
      desc: item.desc
    })), [t]);

  // UXFocus array with useMemo
  const uxFocus = useMemo(() =>
    t.services.pages.ecommerceDevelopment.uxFocus.items.map((item, idx) => ({
      icon: uxFocusIcons[idx],
      title: item.title,
      desc: item.desc
    })), [t]);

  // Clients array with useMemo
  const clients = useMemo(() => [
    { name: t.services.pages.ecommerceDevelopment.portfolio.clients[0].name, url: 'https://onlineparentteenclinic.com/', img: clinicImg, desc: t.services.pages.ecommerceDevelopment.portfolio.clients[0].desc },
    { name: t.services.pages.ecommerceDevelopment.portfolio.clients[1].name, url: 'https://hydrogenlife.eu/', img: hydrogenImg, desc: t.services.pages.ecommerceDevelopment.portfolio.clients[1].desc },
    { name: t.services.pages.ecommerceDevelopment.portfolio.clients[2].name, url: 'https://684ad438cfcdad7a5e3a8db8--serenity-hotel-lux.netlify.app/', img: hotelImg, desc: t.services.pages.ecommerceDevelopment.portfolio.clients[2].desc },
    { name: t.services.pages.ecommerceDevelopment.portfolio.clients[3].name, url: 'https://panitoscryptocoin.com/', img: cryptoImg, desc: t.services.pages.ecommerceDevelopment.portfolio.clients[3].desc },
  ], [t]);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Gradients/Particles */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute bottom-[-10%] right-[-10%] w-[32vw] h-[32vw] bg-gradient-to-br from-purple-400/40 via-blue-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          {/* Floating e-commerce keywords */}
          {['E-shop', 'Cart', 'Checkout', 'ERP', 'CRM', 'WooCommerce', 'Shopify', 'Magento', 'Stripe', 'PayPal', 'Viva', 'SEO'].map((kw, i) => (
            <motion.div
              key={kw}
              className="absolute z-10 opacity-20 text-lg md:text-2xl font-bold text-blue-400"
              style={{
                top: `${10 + 60 * Math.sin((i / 12) * 2 * Math.PI)}%`,
                left: `${10 + 80 * Math.cos((i / 12) * 2 * Math.PI)}%`,
                filter: 'drop-shadow(0 4px 24px rgba(80,80,200,0.10))',
              }}
              animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {kw}
            </motion.div>
          ))}
        </motion.div>
        {/* HERO CONTENT SPLIT LAYOUT */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <motion.div className="flex-1 flex flex-col items-start md:items-start text-left" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
              {t.services.pages.ecommerceDevelopment.hero.title}
            </motion.h1>
            <motion.p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              {t.services.pages.ecommerceDevelopment.hero.subtitle}
            </motion.p>
            <motion.button
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-lg shadow-2xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { window.location.href = '/contactme'; }}
            >
              <span className="relative z-10">{t.services.pages.ecommerceDevelopment.hero.cta}</span>
            </motion.button>
          </motion.div>
          {/* Right: Animated Cart Image */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full md:w-auto mt-12 md:mt-0"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img
              src={appsImg}
              alt="Eshop Hero"
              className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
              animate={{ y: [0, -18, 0, 18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Τι Προσφέρουμε */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">{t.services.pages.ecommerceDevelopment.offers.title}</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {offers.map((o, idx) => (
            <motion.div key={o.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{o.icon}</div><h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{o.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{o.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Τεχνολογίες */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">{t.services.pages.ecommerceDevelopment.technologies.title}</motion.h2>
        <div className="flex justify-center mb-8 gap-4">
          {techTabs.map((tab, idx) => (
            <button key={tab.label} className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${currentTab === idx ? 'bg-gradient-to-r from-blue-600 to-purple-400 text-white shadow-lg' : 'bg-white text-blue-700 border border-blue-100'}`} onClick={() => setCurrentTab(idx)}>{tab.label}</button>
          ))}
        </div>
        <motion.div className="flex flex-wrap justify-center gap-10 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {techTabs[currentTab].icons.map((t, idx) => (
            <motion.div key={t.name} className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group" initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}>{t.icon}<span className="text-base text-blue-900 font-semibold mt-2">{t.name}</span></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Σενάρια Χρήσης */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">{t.services.pages.ecommerceDevelopment.useCases.title}</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {useCases.map((u, idx) => (
            <motion.div key={u.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{u.icon}</div><h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{u.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{u.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-blue-400 group-focus:border-blue-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* UX Design Focus */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">{t.services.pages.ecommerceDevelopment.uxFocus.title}</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {uxFocus.map((u, idx) => (
            <motion.div key={u.title} className="group bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/40 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{u.icon}</div><h4 className="text-base font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">{u.title}</h4><p className="text-gray-600 mb-4 text-sm leading-relaxed">{u.desc}</p></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πελατολόγιο & Παραδείγματα */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">{t.services.pages.ecommerceDevelopment.portfolio.title}</motion.h2>
        <div className="relative flex items-center justify-center">
          <button className="absolute left-0 z-10 p-3 bg-white/80 rounded-full shadow hover:bg-blue-100 transition-all" onClick={() => setCurrentClient((currentClient - 1 + clients.length) % clients.length)}><FaChevronLeft className="text-blue-500 text-2xl" /></button>
          <motion.div className="w-full max-w-lg mx-auto group bg-white/90 rounded-3xl shadow-2xl border border-blue-100/40 overflow-hidden flex flex-col hover:scale-105 hover:shadow-3xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200" key={clients[currentClient].name} initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="relative h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
              <img src={clients[currentClient].img} alt={clients[currentClient].name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-center p-8">
              <h4 className="text-2xl font-bold text-blue-900 mb-2">{clients[currentClient].name}</h4>
              <p className="text-blue-700 text-base mb-2">{clients[currentClient].desc}</p>
              <a href={clients[currentClient].url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400">{t.services.pages.ecommerceDevelopment.portfolio.viewProject}</a>
            </div>
          </motion.div>
          <button className="absolute right-0 z-10 p-3 bg-white/80 rounded-full shadow hover:bg-blue-100 transition-all" onClick={() => setCurrentClient((currentClient + 1) % clients.length)}><FaChevronRight className="text-blue-500 text-2xl" /></button>
        </div>
      </section>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">{t.services.pages.ecommerceDevelopment.finalCta.title}</h2>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">{t.services.pages.ecommerceDevelopment.finalCta.button}</span></motion.button>
        </motion.div>
      </section>
    </div>
  );
}