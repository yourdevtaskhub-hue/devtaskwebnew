import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaComments, FaChartLine, FaUserShield, FaQuestionCircle, FaCogs, FaFacebookMessenger, FaWhatsapp, FaGlobe, FaUserAstronaut, FaWindows, FaInstagram } from 'react-icons/fa';
import { SiDialogflow, SiRasa, SiOpenai, SiTwilio, SiWhatsapp, SiMeta, SiSlack } from 'react-icons/si';
import chatbotImg from '../assets/chatbot.png';
import internetImg from '../assets/internet.jpg';
import aiImg from '../assets/AI.jpg';
// import chatbotLottie from '../assets/lottie-chatbot.json';
const chatbotLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const advantages = [
  { icon: <FaComments className="text-blue-500 text-3xl" />, title: 'Αυτόματη εξυπηρέτηση πελατών', desc: '24/7 απαντήσεις, χωρίς αναμονή.' },
  { icon: <FaChartLine className="text-green-500 text-3xl" />, title: 'Συλλογή leads & κρατήσεις', desc: 'Αυτόματη συλλογή στοιχείων και κρατήσεων.' },
  { icon: <FaCogs className="text-purple-500 text-3xl" />, title: 'Πωλήσεις μέσω chat', desc: 'Αύξηση πωλήσεων με conversational commerce.' },
  { icon: <FaQuestionCircle className="text-pink-500 text-3xl" />, title: 'FAQ & Support Bots', desc: 'Άμεση απάντηση σε συχνές ερωτήσεις.' },
  { icon: <FaUserShield className="text-yellow-500 text-3xl" />, title: 'Εσωτερικά bots', desc: 'Αυτοματοποίηση διαδικασιών για την ομάδα σας.' },
];

const techs = [
  { icon: <SiDialogflow className="text-yellow-500 text-4xl" />, name: 'Dialogflow' },
  { icon: <SiRasa className="text-purple-500 text-4xl" />, name: 'Rasa' },
  { icon: <SiOpenai className="text-blue-500 text-4xl" />, name: 'OpenAI / GPT' },
  { icon: <SiTwilio className="text-red-500 text-4xl" />, name: 'Twilio' },
  { icon: <SiWhatsapp className="text-green-500 text-4xl" />, name: 'WhatsApp Business' },
  { icon: <SiMeta className="text-blue-700 text-4xl" />, name: 'Meta / Messenger' },
  { icon: <FaInstagram className="text-pink-500 text-4xl" />, name: 'Instagram' },
  { icon: <FaGlobe className="text-blue-400 text-4xl" />, name: 'Webchat SDKs' },
  { icon: <FaWindows className="text-gray-700 text-4xl" />, name: 'Microsoft Bot' },
  { icon: <SiSlack className="text-indigo-500 text-4xl" />, name: 'Slack' },
];

const flowSteps = [
  { icon: <FaUserAstronaut className="text-blue-500 text-2xl" />, title: 'Χρήστης', desc: 'Ξεκινά συνομιλία με το chatbot.' },
  { icon: <FaRobot className="text-purple-500 text-2xl" />, title: 'AI Agent', desc: 'Αναγνωρίζει το αίτημα με NLP.' },
  { icon: <FaCogs className="text-green-500 text-2xl" />, title: 'Επεξεργασία', desc: 'Εκτελεί αυτοματισμούς ή αναζητά απαντήσεις.' },
  { icon: <FaComments className="text-pink-500 text-2xl" />, title: 'Απάντηση', desc: 'Επιστρέφει απάντηση ή ενέργεια στον χρήστη.' },
];

export default function ChatbotsAIAgentsPage() {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Gradients/Particles */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute bottom-[-10%] right-[-10%] w-[32vw] h-[32vw] bg-gradient-to-br from-purple-400/40 via-blue-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl" animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        </motion.div>
        {/* HERO CONTENT SPLIT LAYOUT */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: Text */}
          <motion.div className="flex-1 flex flex-col items-start md:items-start text-left" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
              Chatbots & AI Agents για Επιχειρήσεις
            </motion.h1>
            <motion.p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Έξυπνοι ψηφιακοί βοηθοί που αυτοματοποιούν την επικοινωνία, βελτιώνουν την εμπειρία πελάτη και αυξάνουν την αποδοτικότητα της επιχείρησής σας. Υποστήριξη Facebook Messenger, WhatsApp, ιστοσελίδες, mobile apps & custom πλατφόρμες.
            </motion.p>
            <motion.button
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-lg shadow-2xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { window.location.href = '/contactme'; }}
            >
              <span className="relative z-10">Ζητήστε Demo</span>
            </motion.button>
          </motion.div>
          {/* Right: Animated Chatbot Image */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full md:w-auto mt-12 md:mt-0"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img
              src={chatbotImg}
              alt="Chatbot"
              className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] object-contain rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
              animate={{ y: [0, -18, 0, 18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Πλεονεκτήματα & Εφαρμογές */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πλεονεκτήματα & Εφαρμογές</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {advantages.map((a, idx) => (
            <motion.div key={a.title} className="group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => playSound(clickSfx)}><div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{a.icon}</div><h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{a.title}</h4><p className="text-gray-600 mb-4 text-base leading-relaxed">{a.desc}</p></motion.div>
          ))}
        </motion.div>
      </section>

      {/* Τεχνολογίες & Πλατφόρμες */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Τεχνολογίες & Πλατφόρμες</motion.h2>
        <motion.p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          Τα chatbots και οι AI agents συνδέονται με τις πιο σύγχρονες πλατφόρμες επικοινωνίας και τεχνολογίες, όπως Messenger, WhatsApp, Instagram, Webchat, Slack, και APIs. Έτσι, η επιχείρησή σας μπορεί να προσφέρει αυτοματοποιημένη, άμεση και προσωποποιημένη εξυπηρέτηση σε κάθε κανάλι που χρησιμοποιούν οι πελάτες σας.
        </motion.p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          {techs.map((t, idx) => (
            <motion.div key={t.name} className="flex flex-col items-center gap-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/40 group" initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.1, boxShadow: '0 0 24px 0 #a5b4fc' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              {t.icon}
              <span className="text-base text-blue-900 font-semibold mt-2">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ΝΕΟ SECTION: Το μέλλον της επικοινωνίας */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Internet Image */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={internetImg}
            alt="Internet Communication"
            className="w-[320px] h-[220px] md:w-[420px] md:h-[320px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
            animate={{ y: [0, 12, 0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
          />
        </motion.div>
        {/* Right: Content */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">Το μέλλον της επικοινωνίας είναι εδώ</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            Τα chatbots και οι AI agents μεταμορφώνουν τον τρόπο που οι επιχειρήσεις επικοινωνούν με τους πελάτες τους. Παρέχουν άμεσες απαντήσεις, αυτοματοποιούν διαδικασίες, συλλέγουν leads και προσφέρουν προσωποποιημένη εμπειρία 24/7. Ενσωματώνονται εύκολα σε ιστοσελίδες, social media και εφαρμογές, προσφέροντας ανταγωνιστικό πλεονέκτημα και εξοικονόμηση χρόνου.
          </p>
          <ul className="space-y-3 text-base text-blue-900 font-medium">
            <li>• Αυτόματη εξυπηρέτηση πελατών & υποστήριξη</li>
            <li>• Συλλογή και διαχείριση leads</li>
            <li>• Εξατομικευμένες απαντήσεις με AI</li>
            <li>• Ενσωμάτωση σε κάθε πλατφόρμα</li>
            <li>• Ανάλυση συνομιλιών & στατιστικά</li>
          </ul>
        </motion.div>
      </section>

      {/* Συνεργαστείτε με AI Agent (optional visual) */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Content */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left bg-white/90 rounded-3xl shadow-2xl border border-blue-100/40 p-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">Συνεργαστείτε με AI Agent</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            Δημιουργήστε τον δικό σας ψηφιακό βοηθό ή chatbot με προηγμένες δυνατότητες AI, φυσική γλώσσα και αυτοματισμούς που ταιριάζουν στις ανάγκες της επιχείρησής σας. Ενισχύστε την εξυπηρέτηση, αυτοματοποιήστε διαδικασίες και προσφέρετε μοναδική εμπειρία στους πελάτες σας.
          </p>
          <ul className="space-y-3 text-base text-blue-900 font-medium mb-6">
            <li>• Εξατομικευμένες απαντήσεις 24/7</li>
            <li>• Ενσωμάτωση με social, site, apps</li>
            <li>• Συλλογή leads & κρατήσεων</li>
            <li>• Προηγμένη ανάλυση συνομιλιών</li>
            <li>• Εύκολη διαχείριση & εκπαίδευση</li>
          </ul>
          <motion.button
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-lg shadow-2xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { window.location.href = '/contactme'; }}
          >
            <span className="relative z-10">Ζητήστε Προσφορά</span>
          </motion.button>
        </motion.div>
        {/* Right: AI Image from assets */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={aiImg}
            alt="AI Collaboration"
            className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
            animate={{ y: [0, 18, 0, -18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
          />
        </motion.div>
      </section>
    </div>
  );
} 