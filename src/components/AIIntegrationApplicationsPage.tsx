import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaBrain, FaMagic, FaCogs, FaUserFriends, FaChevronLeft, FaChevronRight, FaMicrochip, FaPython, FaDatabase, FaCodeBranch, FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai, SiLangchain, SiFlask, SiDjango, SiGraphql } from 'react-icons/si';
// import aiLottie from '../assets/lottie-ai.json';
const aiLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
// Εισαγωγές εικόνων/εικονιδίων αν χρειάζεται
import aiImg from '../assets/AI.jpg';
import codeImg from '../assets/code.jpg';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const services = [
  { icon: <FaChartLine className="text-blue-500 text-3xl" />, title: 'Ανάλυση Δεδομένων & Προβλέψεις', desc: 'Machine learning για ανάλυση, προβλέψεις, trends.' },
  { icon: <FaMagic className="text-purple-500 text-3xl" />, title: 'Ανίχνευση Προτύπων & Αυτοματισμοί', desc: 'Αναγνώριση patterns, αυτοματοποιημένες ροές.' },
  { icon: <FaBrain className="text-pink-500 text-3xl" />, title: 'Ενσωμάτωση GPT & NLP Μοντέλων', desc: 'Chatbots, φυσική γλώσσα, AI agents.' },
  { icon: <FaRegLightbulb className="text-yellow-500 text-3xl" />, title: 'Custom Recommendation Engines', desc: 'Συστάσεις προϊόντων, εξατομίκευση.' },
  { icon: <FaUserFriends className="text-green-500 text-3xl" />, title: 'Εξατομίκευση Περιεχομένου', desc: 'AI personalization για κάθε χρήστη.' },
  { icon: <FaRobot className="text-cyan-500 text-3xl" />, title: 'Real-time Chatbots & AI Agents', desc: 'Συνομιλία, υποστήριξη, αυτοματοποίηση.' },
];

const techTabs = [
  {
    label: 'AI Frameworks',
    icons: [
      { icon: <SiTensorflow className="text-yellow-500 text-4xl" />, name: 'TensorFlow' },
      { icon: <SiPytorch className="text-red-500 text-4xl" />, name: 'PyTorch' },
      { icon: <SiOpenai className="text-blue-500 text-4xl" />, name: 'OpenAI' },
      { icon: <SiLangchain className="text-purple-500 text-4xl" />, name: 'LangChain' },
    ]
  },
  {
    label: 'Backend',
    icons: [
      { icon: <FaPython className="text-blue-400 text-4xl" />, name: 'Python' },
      { icon: <SiFlask className="text-gray-700 text-4xl" />, name: 'Flask' },
      { icon: <SiDjango className="text-green-700 text-4xl" />, name: 'Django' },
      { icon: <FaDatabase className="text-blue-700 text-4xl" />, name: 'Databases' },
    ]
  },
  {
    label: 'APIs',
    icons: [
      { icon: <FaCodeBranch className="text-pink-500 text-4xl" />, name: 'REST' },
      { icon: <SiGraphql className="text-purple-500 text-4xl" />, name: 'GraphQL' },
    ]
  }
];

const workflow = [
  { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: 'Ανάλυση Αναγκών', desc: 'Κατανόηση στόχων, απαιτήσεων, δεδομένων.' },
  { icon: <FaDatabase className="text-green-500 text-2xl" />, title: 'Συλλογή & Καθαρισμός Δεδομένων', desc: 'Data gathering, cleaning, προετοιμασία.' },
  { icon: <FaBrain className="text-purple-500 text-2xl" />, title: 'Εκπαίδευση Μοντέλων', desc: 'ML training, επιλογή αλγορίθμων.' },
  { icon: <FaMagic className="text-pink-500 text-2xl" />, title: 'Πειραματισμός & Testing', desc: 'Evaluation, testing, fine-tuning.' },
  { icon: <FaCogs className="text-cyan-500 text-2xl" />, title: 'Ενσωμάτωση σε UI', desc: 'API integration, frontend σύνδεση.' },
  { icon: <FaChartLine className="text-blue-400 text-2xl" />, title: 'Monitoring & Updates', desc: 'Συνεχής παρακολούθηση, βελτιώσεις.' },
];

const caseStudies = [
  { client: 'E-shop', use: 'AI Προτάσεις προϊόντων', tech: 'TensorFlow, Python', kpi: '+25% conversion' },
  { client: 'Fintech', use: 'Ανίχνευση απάτης', tech: 'PyTorch, REST API', kpi: '-40% fraud rate' },
  { client: 'Media', use: 'Αυτόματη δημιουργία περιεχομένου', tech: 'OpenAI, LangChain', kpi: '+60% content output' },
];

export default function AIIntegrationApplicationsPage() {
  const [typed, setTyped] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  // Typing effect για το hero
  useEffect(() => {
    const full = 'AI στις Εφαρμογές σας. Από το Όραμα στην Υλοποίηση';
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated AI-inspired Background */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="absolute bottom-[-10%] right-[-10%] w-[32vw] h-[32vw] bg-gradient-to-br from-purple-400/40 via-blue-400/30 to-white/0 rounded-full blur-3xl animate-spin-slow" animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
          {/* Floating AI keywords */}
          {['AI', 'ML', 'Neural Net', 'GPT', 'Python', 'TensorFlow', 'Data', 'NLP', 'Vision', 'Automation'].map((kw, i) => (
            <motion.div
              key={kw}
              className="absolute z-10 opacity-20 text-lg md:text-2xl font-bold text-blue-400"
              style={{
                top: `${10 + 60 * Math.sin((i / 10) * 2 * Math.PI)}%`,
                left: `${10 + 80 * Math.cos((i / 10) * 2 * Math.PI)}%`,
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
              AI στις Εφαρμογές σας — Από το Όραμα στην Υλοποίηση
            </motion.h1>
            <motion.p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Χρησιμοποιούμε τεχνικές machine learning για ανάλυση δεδομένων, δημιουργία προβλέψεων ή έξυπνες λειτουργίες εφαρμογών.
            </motion.p>
            <motion.button
              className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-lg shadow-2xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { window.location.href = '/contactme'; }}
            >
              <span className="relative z-10">Ζητήστε Προσφορά</span>
            </motion.button>
          </motion.div>
          {/* Right: AI Image */}
          <motion.div
            className="flex-1 flex items-center justify-center w-full md:w-auto mt-12 md:mt-0"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.img
              src={aiImg}
              alt="AI Hero"
              className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-blue-100/60 bg-white/80"
              animate={{ y: [0, -18, 0, 18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ boxShadow: '0 8px 48px 0 rgba(80,80,200,0.13)' }}
            />
          </motion.div>
        </div>
      </section>

      {/* AI Υπηρεσίες */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">AI Υπηρεσίες</motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {[
            { icon: '📊', title: 'Ανάλυση Δεδομένων & Προβλέψεις με ML', desc: 'Εξαγωγή insights και προβλέψεων από τα δεδομένα σας.' },
            { icon: '🔍', title: 'Ανίχνευση Προτύπων & Αυτοματισμοί', desc: 'Αναγνώριση patterns και αυτοματοποίηση διαδικασιών.' },
            { icon: '🤖', title: 'Ενσωμάτωση GPT & NLP Μοντέλων', desc: 'AI συνομιλίες, κατανόηση κειμένου, αυτόματη παραγωγή περιεχομένου.' },
            { icon: '🎯', title: 'Custom Recommendation Engines', desc: 'Συστάσεις προϊόντων/υπηρεσιών με AI.' },
            { icon: '✨', title: 'Εξατομίκευση Περιεχομένου', desc: 'AI personalization για κάθε χρήστη.' },
            { icon: '💬', title: 'Real-time Chatbots & AI Agents', desc: 'Έξυπνα bots για υποστήριξη, πωλήσεις, κρατήσεις.' },
          ].map((s, idx) => (
            <motion.div key={s.title} className="group bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}>
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300 text-4xl">{s.icon}</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 tracking-tight">{s.title}</h4>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Τεχνολογίες & Πλατφόρμες */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Τεχνολογίες & Πλατφόρμες</motion.h2>
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

      {/* Πώς Εργάζομαι / AI Workflow */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πώς Εργάζομαι</motion.h2>
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          {workflow.map((step, idx) => (
            <motion.div key={step.title} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]" initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.08 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}><div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border-4 border-blue-200 group-hover:border-purple-300">{step.icon}</div><h4 className="text-base font-bold text-blue-900 mb-2 group-hover:text-blue-500 transition-colors duration-300 tracking-tight">{step.title}</h4><p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.desc}</p>{idx < workflow.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-blue-300 to-purple-200 mx-auto my-2 rounded-full" />}</motion.div>
          ))}
        </motion.div>
      </section>

      {/* Πραγματικά Παραδείγματα */}
      <motion.h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Πραγματικά Παραδείγματα</motion.h2>
      <span className="uppercase tracking-widest text-xs font-bold text-blue-400 mb-8 block text-center">AI Case Studies</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {caseStudies.map((c, idx) => (
          <div key={c.client} className={`group bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100/40 p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-blue-200 relative overflow-hidden min-h-[260px] ${idx % 2 === 0 ? 'bg-gradient-to-br from-blue-50 to-purple-100' : 'bg-gradient-to-br from-purple-50 to-blue-100'} w-full`}>
            <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-purple-300 to-cyan-400 shadow-inner border-4 border-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <FaMicrochip className="text-purple-400 text-5xl" />
            </div>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-base shadow-md mb-2 mt-2 tracking-wide">{c.client}</span>
            <p className="text-blue-700 text-base mb-2">Χρήση AI: <span className="font-semibold">{c.use}</span></p>
            <p className="text-gray-700 text-base mb-2">Τεχνολογίες: <span className="font-semibold">{c.tech}</span></p>
            <p className="text-green-600 text-lg font-bold">{c.kpi}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-6 justify-center">
        {caseStudies.map((_, idx) => (
          <span key={idx} className="w-3 h-3 rounded-full bg-blue-300 opacity-60"></span>
        ))}
      </div>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <motion.div className="relative bg-gradient-to-br from-blue-100 via-white to-purple-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100/40 p-12 flex flex-col items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 tracking-tight">Δώστε νοημοσύνη στην εφαρμογή σας</h2>
          <motion.button className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" whileHover={{ scale: 1.08, boxShadow: '0 0 32px 0 #a78bfa', filter: 'brightness(1.1)', borderColor: '#a78bfa' }} whileTap={{ scale: 0.97 }} onMouseEnter={() => playSound(hoverSfx)} onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ξεκινήστε τώρα</span></motion.button>
        </motion.div>
      </section>
    </div>
  );
} 