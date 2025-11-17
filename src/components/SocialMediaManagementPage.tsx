import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaYoutube, FaTwitter, FaPinterest, FaRegLightbulb, FaRegImages, FaBullhorn, FaUsers, FaChartBar, FaRobot, FaChevronRight, FaChevronLeft, FaCheckCircle, FaRocket, FaChartLine, FaMagic, FaVideo, FaSnapchat, FaWhatsapp, FaTelegram, FaDiscord, FaTwitch, FaReddit } from 'react-icons/fa';
// import socialLottie from '../assets/lottie-socialmedia.json';
const socialLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// ΝΕΟ: Imports για τα logo promotion images
import logosPromotion1 from '../assets/logos_promotion.png';
import logosPromotion2 from '../assets/logos_promotion2.png';
import logosPromotion3 from '../assets/logos_promotion3.png';
import logosPromotion4 from '../assets/logos_promotion4.png';
import logosPromotion5 from '../assets/logos_promotion5.png';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const services = [
  { icon: <FaRegLightbulb className="text-yellow-400 text-3xl" />, title: 'Στρατηγική Περιεχομένου & Προγραμματισμός', desc: 'Αναλυτική στρατηγική, θεματολογία, ημερολόγιο και προγραμματισμένες αναρτήσεις.' },
  { icon: <FaRegImages className="text-pink-400 text-3xl" />, title: 'Δημιουργία Visual Περιεχομένου', desc: 'Graphics, Reels, Stories, videos και φωτογραφίες που ξεχωρίζουν.' },
  { icon: <FaBullhorn className="text-blue-400 text-3xl" />, title: 'Social Ads', desc: 'Meta Ads, TikTok, Instagram, LinkedIn — διαφημίσεις που φέρνουν αποτελέσματα.' },
  { icon: <FaUsers className="text-green-400 text-3xl" />, title: 'Community Management', desc: 'Αλληλεπίδραση, απαντήσεις, διαχείριση σχολίων & DM.' },
  { icon: <FaChartBar className="text-purple-400 text-3xl" />, title: 'Reports & Insights', desc: 'Αναλυτικά reports, στατιστικά και προτάσεις βελτίωσης.' },
  { icon: <FaRobot className="text-cyan-400 text-3xl" />, title: 'AI-Enhanced Content', desc: 'Χρήση AI για ιδέες, captions, hashtags και βελτιστοποίηση.' },
];

// Επαναφορά του platforms array όπως ήταν:
const platforms = [
  { icon: <FaInstagram className="text-pink-500 text-4xl" />, name: 'Instagram' },
  { icon: <FaFacebook className="text-blue-600 text-4xl" />, name: 'Facebook' },
  { icon: <FaTiktok className="text-black text-4xl" />, name: 'TikTok' },
  { icon: <FaLinkedin className="text-blue-700 text-4xl" />, name: 'LinkedIn' },
  { icon: <FaYoutube className="text-red-500 text-4xl" />, name: 'YouTube' },
  { icon: <FaTwitter className="text-blue-400 text-4xl" />, name: 'Twitter' },
  { icon: <FaPinterest className="text-red-400 text-4xl" />, name: 'Pinterest' },
  { icon: <FaSnapchat className="text-yellow-400 text-4xl" />, name: 'Snapchat' },
  { icon: <FaWhatsapp className="text-green-500 text-4xl" />, name: 'WhatsApp' },
  { icon: <FaTelegram className="text-blue-500 text-4xl" />, name: 'Telegram' },
  { icon: <FaDiscord className="text-purple-500 text-4xl" />, name: 'Discord' },
  { icon: <FaTwitch className="text-purple-600 text-4xl" />, name: 'Twitch' },
  { icon: <FaReddit className="text-orange-500 text-4xl" />, name: 'Reddit' },
];

const samples = [
  { img: '/src/assets/social1.jpg', title: 'Instagram Campaign', desc: 'Δημιουργία καμπάνιας με Reels & Stories.' },
  { img: '/src/assets/social2.jpg', title: 'Facebook Ads', desc: 'Στοχευμένες διαφημίσεις για αύξηση πωλήσεων.' },
  { img: '/src/assets/social3.jpg', title: 'TikTok Viral', desc: 'Viral video με πάνω από 1M views.' },
  { img: '/src/assets/social4.jpg', title: 'LinkedIn B2B', desc: 'Επαγγελματικό περιεχόμενο για B2B κοινό.' },
];

const stats = [
  { icon: <FaRocket className="text-pink-400 text-4xl" />, label: '+450% engagement', desc: 'Αύξηση αλληλεπίδρασης' },
  { icon: <FaChartLine className="text-blue-400 text-4xl" />, label: '+35% πωλήσεις', desc: 'Από Social Ads' },
  { icon: <FaMagic className="text-purple-400 text-4xl" />, label: '5M+ reach', desc: 'Μηνιαία απήχηση' },
];

const workflow = [
  { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: 'Ανάλυση Προφίλ', desc: 'Έλεγχος παρουσίας & στόχων.' },
  { icon: <FaRegLightbulb className="text-yellow-400 text-2xl" />, title: 'Δημιουργία Στρατηγικής', desc: 'Σχεδιασμός πλάνου & θεματολογίας.' },
  { icon: <FaRegImages className="text-pink-400 text-2xl" />, title: 'Δημιουργικό & Περιεχόμενο', desc: 'Παραγωγή visuals, videos, captions.' },
  { icon: <FaUsers className="text-green-400 text-2xl" />, title: 'Ανάρτηση & Engagement', desc: 'Δημοσίευση & διαχείριση κοινού.' },
  { icon: <FaChartBar className="text-purple-400 text-2xl" />, title: 'Analytics & Βελτιστοποίηση', desc: 'Αναφορές & προτάσεις.' },
];

export default function SocialMediaManagementPage() {
  const [currentSample, setCurrentSample] = useState(0);
  const [modalImg, setModalImg] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalImg(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  // Typing effect για το hero
  const [typed, setTyped] = useState('');
  useEffect(() => {
    const full = 'Διαχείριση Social Media';
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const scrollToTransformations = () => {
    const element = document.querySelector('[data-section="logo-transformations"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-white via-pink-50 to-blue-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Floating Social Icons */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              className={`absolute z-10 opacity-20 text-6xl`}
              style={{
                top: `${10 + 60 * Math.sin((i / platforms.length) * 2 * Math.PI)}%`,
                left: `${10 + 80 * Math.cos((i / platforms.length) * 2 * Math.PI)}%`,
                filter: 'drop-shadow(0 4px 24px rgba(200,80,200,0.10))',
              }}
              animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
              transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {p.icon}
            </motion.div>
          ))}
        </motion.div>
        {/* Hero Content */}
        <motion.div className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
            {typed}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Στρατηγική & καθημερινή διαχείριση social προφίλ για επαγγελματίες και επιχειρήσεις. Παρέχουμε δημιουργικό περιεχόμενο, προγραμματισμένες δημοσιεύσεις, στρατηγική, κοινότητα, analytics και διαφήμιση — όλα με σκοπό την ανάπτυξη του brand σας και αύξηση της αλληλεπίδρασης.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-pink-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Πρόταση</span></motion.button>
            <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={scrollToTransformations}><span className="relative z-10">Sample Transformations</span></motion.button>
          </div>
        </motion.div>
      </section>

      {/* Υπηρεσίες που προσφέρουμε */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Υπηρεσίες που προσφέρουμε</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {services.map((s, idx) => (
            <motion.div key={s.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-pink-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255, 80, 200, 0.18)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-pink-200 group-hover:border-blue-300">{s.icon}</div><h4 className="text-xl font-bold text-pink-900 mb-2 group-hover:text-pink-700 transition-colors duration-300 tracking-tight">{s.title}</h4><p className="text-gray-600 mb-6 text-base leading-relaxed">{s.desc}</p><motion.div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-pink-400 group-focus:border-pink-400 transition-all duration-300" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} /></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πλατφόρμες που υποστηρίζουμε */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πλατφόρμες που υποστηρίζουμε</motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-10 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {platforms.map((p, idx) => (
            <motion.div key={p.name} className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group" initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              {p.icon}
              <span className="text-base text-blue-900 font-semibold mt-2">{p.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ΝΕΑ ΕΝΟΤΗΤΑ: Social Media Excellence & Logo Transformation */}
      <section className="max-w-7xl mx-auto py-24 px-4" data-section="logo-transformations">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Social Media Excellence & Logo Transformation</motion.h2>
        <motion.p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">Με τις προηγμένες στρατηγικές μας, μετατρέπουμε κάθε επιχείρηση - μικρή ή μεγάλη - σε viral social media sensation. Δείτε πώς μετατρέπουμε τα απλά logos σε powerful brand identities που απογειώνουν την παρουσία σας στα social platforms.</motion.p>
        
        {/* Hero Content */}
        <motion.div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-3xl shadow-xl border border-purple-100/40 p-8 md:p-12 mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Πώς κάνουμε την διαφορά στο Social Media</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Στρατηγική ανάλυση του target audience και των trends</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Δημιουργία viral content που ξεχωρίζει</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Logo transformations για maximum social impact</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Data-driven optimization για continuous growth</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-purple-700 mb-2">Viral Success Rate</h4>
              <p className="text-gray-600">95% των πελατών μας βλέπουν σημαντική αύξηση στο engagement</p>
            </div>
          </div>
        </motion.div>

        {/* Logo Transformation Showcase */}
        <motion.h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Δείγματα Logo Transformations για Social Media</motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo 1 */}
          <motion.div className="bg-white rounded-3xl shadow-xl border border-purple-100/40 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} onClick={() => setModalImg(logosPromotion1)}>
            <div className="p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Στυλ Πλεξίματος</h4>
              <p className="text-gray-600 text-sm mb-4">Το logo σε στυλ πλεξίματος με υφή και texture που θυμίζει πλεκτό ύφασμα.</p>
            </div>
            <div className="relative overflow-hidden">
              <img src={logosPromotion1} alt="Στυλ Πλεξίματος" className="w-full h-64 object-contain bg-gradient-to-br from-purple-50 to-pink-50 p-4 group-hover:scale-110 transition-transform duration-500" />
              {/* Fullscreen indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Κάντε κλικ για μεγέθυνση
              </div>
            </div>
          </motion.div>

          {/* Logo 2 */}
          <motion.div className="bg-white rounded-3xl shadow-xl border border-purple-100/40 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }} onClick={() => setModalImg(logosPromotion2)}>
            <div className="p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Στυλ Μπαλονιού</h4>
              <p className="text-gray-600 text-sm mb-4">Το ίδιο logo σε στυλ μπαλονιού με αεροδυναμικά σχήματα και ελαστικότητα.</p>
            </div>
            <div className="relative overflow-hidden">
              <img src={logosPromotion2} alt="Στυλ Μπαλονιού" className="w-full h-64 object-contain bg-gradient-to-br from-blue-50 to-purple-50 p-4 group-hover:scale-110 transition-transform duration-500" />
              {/* Fullscreen indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Κάντε κλικ για μεγέθυνση
              </div>
            </div>
          </motion.div>

          {/* Logo 3 */}
          <motion.div className="bg-white rounded-3xl shadow-xl border border-purple-100/40 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} onClick={() => setModalImg(logosPromotion3)}>
            <div className="p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Στυλ Εμβλήματος Jersey</h4>
              <p className="text-gray-600 text-sm mb-4">Το logo σε στυλ εμβλημάτων jersey με αθλητικό appeal και team spirit.</p>
            </div>
            <div className="relative overflow-hidden">
              <img src={logosPromotion3} alt="Στυλ Εμβλήματος Jersey" className="w-full h-64 object-contain bg-gradient-to-br from-pink-50 to-red-50 p-4 group-hover:scale-110 transition-transform duration-500" />
              {/* Fullscreen indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Κάντε κλικ για μεγέθυνση
              </div>
            </div>
          </motion.div>

          {/* Logo 4 */}
          <motion.div className="bg-white rounded-3xl shadow-xl border border-purple-100/40 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} onClick={() => setModalImg(logosPromotion4)}>
            <div className="p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Στυλ Νερού</h4>
              <p className="text-gray-600 text-sm mb-4">Το logo σε στυλ νερού με υγρά effects και ρευστά σχήματα.</p>
            </div>
            <div className="relative overflow-hidden">
              <img src={logosPromotion4} alt="Στυλ Νερού" className="w-full h-64 object-contain bg-gradient-to-br from-green-50 to-blue-50 p-4 group-hover:scale-110 transition-transform duration-500" />
              {/* Fullscreen indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Κάντε κλικ για μεγέθυνση
              </div>
            </div>
          </motion.div>

          {/* Logo 5 */}
          <motion.div className="bg-white rounded-3xl shadow-xl border border-purple-100/40 overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer relative" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} onClick={() => setModalImg(logosPromotion5)}>
            <div className="p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Στυλ Παραθύρων Ουρανοξύστη</h4>
              <p className="text-gray-600 text-sm mb-4">Το logo σε στυλ που θυμίζει τα παράθυρα ενός ουρανοξύστη με γεωμετρικά σχήματα.</p>
            </div>
            <div className="relative overflow-hidden">
              <img src={logosPromotion5} alt="Στυλ Παραθύρων Ουρανοξύστη" className="w-full h-64 object-contain bg-gradient-to-br from-orange-50 to-yellow-50 p-4 group-hover:scale-110 transition-transform duration-500" />
              {/* Fullscreen indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </div>
              {/* Click hint */}
              <div className="absolute bottom-2 right-2 bg-white/80 text-xs text-gray-600 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Κάντε κλικ για μεγέθυνση
              </div>
            </div>
          </motion.div>
        </div>

        {/* Modal for full size image */}
        {modalImg && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setModalImg(null)}>
            <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg text-2xl z-10 focus:outline-none"
                aria-label="Κλείσιμο"
                onClick={() => setModalImg(null)}
              >✕</button>
              <img
                src={modalImg}
                alt="Logo Full Size"
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white object-contain"
                style={{ background: 'white' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Δείγματα Δουλειάς / Case Studies */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Social Media Trends & Insights</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            {
              title: 'Αύξηση Video Content',
              desc: 'Το video content κυριαρχεί στα social media, αυξάνοντας το engagement και την απήχηση των brands.',
              icon: <FaVideo className="text-orange-400 text-4xl mb-4" />,
            },
            {
              title: 'Stories & Reels',
              desc: 'Τα Stories και τα Reels προσφέρουν άμεση αλληλεπίδραση και δημιουργούν πιστό κοινό.',
              icon: <FaRegImages className="text-pink-400 text-4xl mb-4" />,
            },
            {
              title: 'AI & Automation',
              desc: 'Η χρήση AI για προγραμματισμό, ανάλυση και αυτοματοποίηση περιεχομένου γίνεται πλέον απαραίτητη.',
              icon: <FaRobot className="text-blue-400 text-4xl mb-4" />,
            },
            {
              title: 'Micro-Influencers',
              desc: 'Οι micro-influencers φέρνουν αυθεντικότητα και υψηλότερο engagement σε εξειδικευμένα κοινά.',
              icon: <FaUsers className="text-emerald-400 text-4xl mb-4" />,
            },
            {
              title: 'Analytics & Insights',
              desc: 'Η ανάλυση δεδομένων οδηγεί σε καλύτερες αποφάσεις και βελτιστοποίηση στρατηγικής.',
              icon: <FaChartBar className="text-purple-400 text-4xl mb-4" />,
            },
            {
              title: 'Προσωποποιημένο Περιεχόμενο',
              desc: 'Το προσωποποιημένο περιεχόμενο αυξάνει την αλληλεπίδραση και τη σύνδεση με το brand.',
              icon: <FaMagic className="text-cyan-400 text-4xl mb-4" />,
            },
          ].map((trend, idx) => (
            <motion.div key={trend.title} className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}>
              {trend.icon}
              <h4 className="text-xl font-bold text-blue-900 mb-2">{trend.title}</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">{trend.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πως δουλεύουμε / Ροή Εργασιών */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-12 text-center bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Πως δουλεύουμε</motion.h2>
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {workflow.map((step, idx) => (
            <motion.div key={step.title} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}><div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-blue-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-pink-200 group-hover:border-blue-300">{step.icon}</div><h4 className="text-base font-bold text-pink-900 mb-2 group-hover:text-pink-500 transition-colors duration-300 tracking-tight">{step.title}</h4><p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.desc}</p>{idx < workflow.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-pink-300 to-blue-200 mx-auto my-2 rounded-full" />}</motion.div>
          ))}
        </motion.div>
      </section>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-pink-100 via-white to-blue-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-pink-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-6 tracking-tight">Αναβαθμίστε τα social σας — Επικοινωνήστε τώρα.</h2>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-pink-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-pink-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-pink-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ξεκινήστε Σήμερα</span></motion.button>
        </motion.div>
      </section>
    </div>
  );
} 