import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaDesktop, FaFigma, FaUserFriends, FaRegObjectGroup, FaRegEdit, FaSyncAlt, FaCheckCircle, FaStar, FaChevronLeft, FaChevronRight, FaUserCircle, FaLayerGroup, FaRegEye } from 'react-icons/fa';
// import uiLottie from '../assets/lottie-ui.json';
const uiLottie = {};
const hoverSfx = '';
const clickSfx = '';
// @ts-ignore: No types for aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import uiImg from '../assets/UI.png';
import ui2Img from '../assets/ui2.jpg';
import ui3Img from '../assets/ui3.jpg';
import ui4Img from '../assets/ui4.jpg';
import ui5Img from '../assets/ui5.jpg';
import ui6Img from '../assets/ui6.png';
import { useIsMobile } from '../hooks/useIsMobile';
import financeImg from '../assets/ui2.jpg';
import foodImg from '../assets/ui3.jpg';
import travelImg from '../assets/ui4.jpg';
import cryptoImg from '../assets/ui5.jpg';
import smartHomeImg from '../assets/ui6.png';
import datingImg from '../assets/ui2.jpg';
import bookImg from '../assets/ui3.jpg';
import UIBookReadingApp from '../assets/UIBookReadingApp.png';
import UIcryptowallet from '../assets/UIcryptowallet.png';
import UIDatingApp from '../assets/UIDatingApp.png';
import UIrestaurant from '../assets/UIrestaurant.png';
import UIsamples from '../assets/UIsamples.png';
import UIsmarthome from '../assets/UIsmarthome.png';
import UItravellerapp from '../assets/UItravellerapp.png';

function playSound(src: string) {
  if (!src) return;
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play();
}

const services = [
  { icon: <FaDesktop className="text-blue-500 text-3xl" />, title: 'Σχεδιασμός Interfaces για Web & Mobile', desc: 'UI για ιστοσελίδες, εφαρμογές, SaaS, mobile.' },
  { icon: <FaFigma className="text-pink-500 text-3xl" />, title: 'Διαδραστικά Prototypes', desc: 'Figma, Adobe XD, clickable prototypes.' },
  { icon: <FaRegObjectGroup className="text-purple-500 text-3xl" />, title: 'User Flows & Wireframing', desc: 'Διαγράμματα ροής, wireframes, αρχιτεκτονική.' },
  { icon: <FaUserFriends className="text-green-500 text-3xl" />, title: 'UX Research & Personas', desc: 'Έρευνα χρηστών, personas, user journeys.' },
  { icon: <FaRegEdit className="text-yellow-500 text-3xl" />, title: 'Βελτιστοποίηση Υφιστάμενων UI', desc: 'Redesign, usability audit, βελτιώσεις.' },
  { icon: <FaSyncAlt className="text-cyan-500 text-3xl" />, title: 'Responsive Design', desc: 'Προσαρμογή για κάθε συσκευή & οθόνη.' },
  { icon: <FaRegEye className="text-blue-400 text-3xl" />, title: 'Testing & Iteration', desc: 'A/B testing, feedback, συνεχής βελτίωση.' },
];

const methodology = [
  { icon: <FaCheckCircle className="text-blue-500 text-2xl" />, title: 'Κατανόηση αναγκών', desc: 'Συζήτηση, στόχοι, ανάλυση.' },
  { icon: <FaUserFriends className="text-green-500 text-2xl" />, title: 'Έρευνα Χρηστών', desc: 'Personas, user journeys, pain points.' },
  { icon: <FaRegObjectGroup className="text-purple-500 text-2xl" />, title: 'Σχεδίαση Wireframes', desc: 'Δομή, flows, wireframes.' },
  { icon: <FaLayerGroup className="text-pink-500 text-2xl" />, title: 'Δημιουργία UI με design system', desc: 'Στυλ, components, consistency.' },
  { icon: <FaSyncAlt className="text-cyan-500 text-2xl" />, title: 'Προσαρμογή & Αξιολόγηση', desc: 'Testing, feedback, iteration.' },
];

const gallery = [
  { img: '/src/assets/ui2.png', title: 'Mobile App UI', desc: 'Σύγχρονο mobile interface.' },
  { img: '/src/assets/ui3.jpg', title: 'Web Dashboard', desc: 'Διαδραστικό web dashboard.' },
  { img: '/src/assets/UI.png', title: 'Responsive Layout', desc: 'UI για όλες τις συσκευές.' },
];

const testimonials = [
  { quote: 'Το UI που σχεδίασε ήταν εντυπωσιακό και αύξησε το engagement των χρηστών μας.', name: 'Ελένη Μ.', avatar: '', rating: 5 },
  { quote: 'Άψογη συνεργασία, προσοχή στη λεπτομέρεια και εξαιρετικό αποτέλεσμα.', name: 'Γιώργος Π.', avatar: '', rating: 5 },
];

export default function UXUIDesignPage() {
  const isMobile = useIsMobile();
  const [typed, setTyped] = useState('');
  const [currentGallery, setCurrentGallery] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // ΝΕΟ: State για modal εικόνας
  const [modalImg, setModalImg] = useState<string | null>(null);
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);
  // Typing effect για το hero
  useEffect(() => {
    const full = 'UX/UI Design';
    let i = 0;
    setTyped('');
    const interval = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Κλείσιμο modal με Escape ή tap εκτός εικόνας
  useEffect(() => {
    if (!modalImg) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalImg(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalImg]);
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pb-10 select-none">
        {/* Πολύχρωμο gradient background και blurred shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-60 rounded-full blur-3xl" style={{filter:'blur(80px)'}}></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-400 via-teal-300 to-pink-400 opacity-50 rounded-full blur-2xl" style={{filter:'blur(60px)'}}></div>
          <div className="absolute top-1/2 left-1/3 w-1/4 h-1/4 bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 opacity-40 rounded-full blur-2xl" style={{filter:'blur(40px)'}}></div>
        </div>
        {/* Floating Wireframes / Layers: ΜΟΝΟ σε desktop */}
        {!isMobile && (
          <motion.div className="absolute inset-0 z-0 pointer-events-none">
            {[
              "UI", "Figma", "Wireframe", "Button", "Card", "Modal", "Sketch", "Mobile", "Web", "Flow"
            ].map((kw, i) => (
              <motion.div
                key={kw}
                className="absolute z-10 opacity-20 text-lg md:text-2xl font-bold text-purple-400"
                style={{
                  top: `${10 + 60 * Math.sin((i / 10) * 2 * Math.PI)}%`,
                  left: `${10 + 80 * Math.cos((i / 10) * 2 * Math.PI)}%`,
                  filter: 'drop-shadow(0 4px 24px rgba(160,80,200,0.10))',
                }}
                animate={{ y: [0, i % 2 === 0 ? 20 : -20, 0] }}
                transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                {kw}
              </motion.div>
            ))}
          </motion.div>
        )}
        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl mx-auto px-4 py-32 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-tight bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: "'IBM Plex Sans', 'Inter', sans-serif" }}>
            UX/UI Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium max-w-2xl mx-auto">
            Σχεδιάζουμε φιλικά προς τον χρήστη και αποδοτικά interfaces με έμφαση στη χρηστικότητα και την εμπειρία.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Προσφορά</span></button>
            <button className="inline-block px-12 py-5 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-blue-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in flex items-center gap-2 relative overflow-hidden" onClick={() => { document.getElementById('uiux-samples')?.scrollIntoView({ behavior: 'smooth' }); }}><span className="relative z-10">Δείτε Δείγματα</span></button>
          </div>
        </div>
      </section>

      {/* Υπηρεσίες UX/UI */}
      <section className="max-w-4xl mx-auto py-24 px-4">
        <div className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-100/40 p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
          {/* Εικόνα/Γραφικό UI */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/3 mb-8 md:mb-0">
            <img src={uiImg} alt="UI Design" className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-2xl shadow-xl bg-white/80" />
          </div>
          {/* Περιεχόμενο */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Υπηρεσίες UX/UI</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">Σχεδιάζουμε premium interfaces για web & mobile, με έμφαση στη χρηστικότητα, την αισθητική και το αποτέλεσμα.</p>
            {/* Badges/Icons row */}
            <div className={`grid grid-cols-2 gap-4 w-full py-2 justify-center md:justify-start md:flex md:flex-row md:flex-wrap md:gap-3`}>
              {services.map((s, idx) => (
                <div key={s.title} className="flex flex-col items-center bg-white/80 rounded-2xl shadow-md border border-purple-100/40 px-5 py-4 min-w-[120px] max-w-[180px] flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 shadow-inner border-2 border-purple-200">
                    {s.icon}
                  </div>
                  <span className="text-sm font-semibold text-purple-900 mb-1 text-center leading-tight">{s.title}</span>
                  <span className="text-xs text-gray-500 text-center leading-tight">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Μεθοδολογία / Ροή Εργασίας */}
      <section className="max-w-7xl mx-auto py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-12 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Μεθοδολογία</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {methodology.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-purple-100/40 p-10 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden min-w-[180px]">
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 shadow-inner border-4 border-purple-200">
                {step.icon}
              </div>
              <h4 className="text-base font-bold text-purple-900 mb-2 group-hover:text-purple-500 transition-colors duration-300 tracking-tight">{step.title}</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{step.desc}</p>
              {idx < methodology.length - 1 && <div className="w-1 h-10 bg-gradient-to-b from-purple-300 to-blue-200 mx-auto my-2 rounded-full" />}
            </div>
          ))}
        </div>
      </section>

      {/* Trends & Inspiration */}
      <section id="uiux-samples" className="max-w-7xl mx-auto py-24 px-2 sm:px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">Δείγματα UI/UX Εφαρμογών</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">Δείτε μερικά παραδείγματα σύγχρονου UI/UX design για εφαρμογές που καλύπτουν διαφορετικές ανάγκες και κλάδους. Κάθε δείγμα συνοδεύεται από περιγραφή και το αντίστοιχο γραφικό.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Finance App (UIsamples) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIsamples} alt="Finance App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIsamples)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Εφαρμογή Οικονομικών</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Σύγχρονο mobile UI για παρακολούθηση προσωπικών οικονομικών. Περιλαμβάνει dashboard με γραφήματα, λίστα συναλλαγών, μπάρα προόδου προϋπολογισμού και κουμπί για προσθήκη εξόδων. Καθαρό light θέμα με τόνους teal και λευκού.</p>
            </div>
          </div>
          {/* Food Delivery App (UIrestaurant) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-orange-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIrestaurant} alt="Food Delivery App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIrestaurant)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-orange-700 mb-2">Εφαρμογή Παραγγελίας Φαγητού</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Φιλικό UI για παραγγελία φαγητού. Αρχική με εστιατόρια, δημοφιλή πιάτα, αναζήτηση και φίλτρα. Ζωντανά χρώματα (πορτοκαλί, κόκκινο), καθαρές εικόνες φαγητού και μοντέρνα εικονίδια.</p>
            </div>
          </div>
          {/* Travel Planner App (UItravellerapp) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-blue-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UItravellerapp} alt="Travel Planner App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UItravellerapp)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Εφαρμογή Ταξιδιωτικού Πλάνου</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Όμορφο UI για ταξιδιωτικό πλάνο. Επισκόπηση ταξιδιού, κάρτες ημερήσιου προγράμματος, ενσωμάτωση πρόγνωσης καιρού και χάρτες. Μινιμαλιστικό στυλ με μπλε και μπεζ τόνους.</p>
            </div>
          </div>
          {/* Crypto Wallet App (UIcryptowallet) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-blue-200/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIcryptowallet} alt="Crypto Wallet App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIcryptowallet)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-blue-800 mb-2">Crypto Wallet App</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Φουτουριστικό UI για crypto wallet. Dashboard υπολοίπου, πρόσφατες συναλλαγές, γραφήματα αξίας νομισμάτων και διασύνδεση αποστολής/λήψης. Dark θέμα με ηλεκτρικό μπλε και μοντέρνα τυπογραφία.</p>
            </div>
          </div>
          {/* Smart Home Control App (UIsmarthome) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-purple-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIsmarthome} alt="Smart Home App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIsmarthome)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-purple-800 mb-2">Εφαρμογή Έξυπνου Σπιτιού</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Υψηλής τεχνολογίας UI για έλεγχο smart home. Διακόπτες για φώτα, θερμοκρασία, κάμερες και συσκευές. Sleek gradients, glassmorphism και εικονίδια για εύκολο χειρισμό.</p>
            </div>
          </div>
          {/* Dating App (UIDatingApp) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-pink-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIDatingApp} alt="Dating App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIDatingApp)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-pink-700 mb-2">Εφαρμογή Γνωριμιών</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Στιλάτο UI για dating app. Κάρτες προφίλ με swipe, feed, μηνύματα και φίλτρα. Παιχνιδιάρικα ροζ, μωβ και λευκά με στρογγυλεμένα στοιχεία.</p>
            </div>
          </div>
          {/* Book Reading App (UIBookReadingApp) */}
          <div className="bg-white/90 rounded-3xl shadow-xl border border-yellow-100/40 flex flex-col items-center text-center overflow-hidden">
            <img src={UIBookReadingApp} alt="Book Reading App" className="w-full h-56 object-cover object-top cursor-pointer transition-transform duration-200 hover:scale-105" onClick={() => setModalImg(UIBookReadingApp)} />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h4 className="text-xl font-bold text-yellow-800 mb-2">Εφαρμογή Ανάγνωσης Βιβλίων</h4>
              <p className="text-gray-600 mb-4 text-base leading-relaxed">Ζεστό και κομψό UI για eBook reader. Βιβλιοθήκη, πρόοδος ανάγνωσης, ρυθμίσεις γραμματοσειράς και night mode. Θερμοί τόνοι (κρεμ, καφέ) και serif γραμματοσειρές.</p>
            </div>
          </div>
        </div>
        {/* Modal για full size εικόνα */}
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
                alt="UI Sample Full Size"
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white object-contain"
                style={{ background: 'white' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Τελικό CTA */}
      <section className="max-w-7xl mx-auto py-24 px-4 flex flex-col items-center text-center">
        <div className="relative bg-gradient-to-br from-purple-100 via-white to-blue-100/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-100/40 p-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-6 tracking-tight">Θέλετε να εντυπωσιάσετε τους χρήστες σας με άψογο design;</h2>
          <button className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white rounded-full font-bold text-xl shadow-3xl border-2 border-transparent hover:border-purple-400 hover:shadow-[0_0_32px_0_#a78bfa] focus:outline-none focus:ring-2 focus:ring-purple-400 animate-fade-in flex items-center gap-2 relative overflow-hidden mt-6" onClick={() => { window.location.href = '/contactme'; }}><span className="relative z-10">Ζητήστε Δωρεάν Συμβουλευτική</span></button>
        </div>
      </section>
    </div>
  );
} 