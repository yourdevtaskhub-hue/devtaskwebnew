import { IconType } from 'react-icons';
import { FaGlobe, FaMobileAlt, FaRobot, FaUsers, FaVideo, FaSearch, FaPhotoVideo, FaPalette, FaDatabase, FaBrain, FaShoppingCart, FaGamepad } from 'react-icons/fa';

export interface Service {
  slug: string;
  title: { el: string; en: string };
  shortDescription: { el: string; en: string };
  description: { el: string; en: string };
  icon: IconType;
  breadcrumbs: { el: string[]; en: string[] };
  features?: { el: string[] };
  visual?: string; // asset filename ή animation key
  ctaText?: { el: string };
}

export const servicesData: Service[] = [
  {
    slug: 'web-development',
    title: {
      el: 'Κατασκευή Ιστοσελίδων & Web Εφαρμογών',
      en: 'Website & Web App Development'
    },
    shortDescription: {
      el: 'Responsive ιστοσελίδες & web apps με σύγχρονες τεχνολογίες.',
      en: 'Responsive websites & web apps with modern tech.'
    },
    description: {
      el: 'Σχεδιάζω και υλοποιώ πλήρως responsive ιστοσελίδες και web εφαρμογές με σύγχρονες τεχνολογίες front-end και back-end.',
      en: 'I design and implement fully responsive websites and web applications using modern front-end and back-end technologies.'
    },
    icon: FaGlobe,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Κατασκευή Ιστοσελίδων & Web Εφαρμογών'],
      en: ['Services', 'Website & Web App Development']
    },
    features: {
      el: [
        'Πλήρως προσαρμοσμένη σχεδίαση για κάθε επαγγελματία',
        'Υψηλή ταχύτητα φόρτωσης & βελτιστοποίηση SEO',
        'Ασφαλής και προσβάσιμη εμπειρία χρήστη',
        'Εύκολη διαχείριση περιεχομένου',
        'Υποστήριξη για e-shop, blog, portfolio και πολλά άλλα'
      ]
    },
    visual: 'architecture.png',
    ctaText: { el: 'Ζητήστε Προσφορά' },
  },
  {
    slug: 'mobile-app-development',
    title: {
      el: 'Κατασκευή Mobile Εφαρμογών',
      en: 'Mobile App Development'
    },
    shortDescription: {
      el: 'Mobile apps για Android & iOS με έμφαση στο UX.',
      en: 'Mobile apps for Android & iOS with great UX.'
    },
    description: {
      el: 'Δημιουργώ mobile εφαρμογές για Android και iOS με έμφαση στη χρηστικότητα, την απόδοση και το user experience.',
      en: 'I create mobile apps for Android and iOS focusing on usability, performance, and user experience.'
    },
    icon: FaMobileAlt,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Κατασκευή Mobile Εφαρμογών'],
      en: ['Services', 'Mobile App Development']
    },
    features: {
      el: [
        'Native & cross-platform εφαρμογές για Android & iOS',
        'Εντυπωσιακό UI/UX design',
        'Γρήγορη απόκριση και σταθερότητα',
        'Ενσωμάτωση με APIs, push notifications, χάρτες',
        'Mockups & previews πριν την υλοποίηση'
      ]
    },
    visual: 'smartphone.jpg',
    ctaText: { el: 'Ζητήστε Προσφορά' },
  },
  {
    slug: 'chatbots-ai-agents',
    title: {
      el: 'Chatbots & AI Agents',
      en: 'Chatbots & AI Agents'
    },
    shortDescription: {
      el: 'Έξυπνοι ψηφιακοί βοηθοί & conversational AI.',
      en: 'Smart digital assistants & conversational AI.'
    },
    description: {
      el: 'Αναπτύσσω έξυπνους ψηφιακούς βοηθούς και conversational συστήματα με AI για αυτοματοποιημένη επικοινωνία και υποστήριξη πελατών.',
      en: 'I develop smart digital assistants and conversational systems using AI for automated customer communication and support.'
    },
    icon: FaRobot,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Chatbots & AI Agents'],
      en: ['Services', 'Chatbots & AI Agents']
    },
    features: {
      el: [
        'Αυτόματη εξυπηρέτηση πελατών 24/7',
        'Εξατομικευμένες απαντήσεις με AI',
        'Ενσωμάτωση σε ιστοσελίδες & εφαρμογές',
        'Ανάλυση συνομιλιών & στατιστικά',
        'Αύξηση παραγωγικότητας και αυτοματοποίηση διαδικασιών'
      ]
    },
    visual: 'chatbot.png',
    ctaText: { el: 'Επικοινωνήστε' },
  },
  {
    slug: 'social-media-management',
    title: {
      el: 'Διαχείριση Social Media',
      en: 'Social Media Management'
    },
    shortDescription: {
      el: 'Στρατηγική & καθημερινή διαχείριση social προφίλ.',
      en: 'Strategic & daily management of social profiles.'
    },
    description: {
      el: 'Στρατηγική και καθημερινή διαχείριση προφίλ σε Facebook, Instagram, LinkedIn και άλλα.',
      en: 'Strategic and daily management of profiles on Facebook, Instagram, LinkedIn, and more.'
    },
    icon: FaUsers,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Διαχείριση Social Media'],
      en: ['Services', 'Social Media Management']
    },
    features: {
      el: [
        'Στρατηγικός σχεδιασμός περιεχομένου',
        'Καθημερινή ανάρτηση & διαχείριση προφίλ',
        'Ανάλυση στατιστικών & αναφορών',
        'Αλληλεπίδραση με το κοινό',
        'Δημιουργία δυναμικών καμπανιών με emojis & visuals'
      ]
    },
    visual: 'social-icons',
    ctaText: { el: 'Ζητήστε Προσφορά' },
  },
  {
    slug: 'video-animation-production',
    title: {
      el: 'Παραγωγή Video & Animation',
      en: 'Video & Animation Production'
    },
    shortDescription: {
      el: 'Βίντεο & animations για προώθηση, εκπαίδευση ή διαφήμιση.',
      en: 'Videos & animations for promo, education, or ads.'
    },
    description: {
      el: 'Δημιουργία και επεξεργασία βίντεο και animations για προωθητική, εκπαιδευτική ή εμπορική χρήση.',
      en: 'Creation and editing of videos and animations for promotional, educational, or commercial use.'
    },
    icon: FaVideo,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Παραγωγή Video & Animation'],
      en: ['Services', 'Video & Animation Production']
    }
  },
  {
    slug: 'seo-website-optimization',
    title: {
      el: 'SEO – Βελτιστοποίηση Ιστοσελίδων',
      en: 'SEO – Website Optimization'
    },
    shortDescription: {
      el: 'Βελτίωση κατάταξης με τεχνικό SEO & περιεχόμενο.',
      en: 'Improve site ranking with technical SEO & content.'
    },
    description: {
      el: 'Βελτιώνω την κατάταξη της ιστοσελίδας σας στις μηχανές αναζήτησης (π.χ. Google) με τεχνικό SEO και στρατηγικές περιεχομένου.',
      en: 'Improve site ranking in search engines (e.g., Google) through technical SEO and content strategies.'
    },
    icon: FaSearch,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'SEO – Βελτιστοποίηση Ιστοσελίδων'],
      en: ['Services', 'SEO – Website Optimization']
    },
    features: {
      el: [
        'Τεχνικό SEO & βελτιστοποίηση ταχύτητας',
        'Βελτίωση κατάταξης σε Google & Bing',
        'Αναλυτικά reports πριν/μετά',
        'Διόρθωση metadata & accessibility',
        'Συνεχής παρακολούθηση & υποστήριξη'
      ]
    },
    visual: 'seo-graph',
    ctaText: { el: 'Ζητήστε SEO Audit' },
  },
  {
    slug: 'multimedia-content-creation',
    title: {
      el: 'Δημιουργία Multimedia Περιεχομένου',
      en: 'Multimedia Content Creation'
    },
    shortDescription: {
      el: 'Διαδραστικό περιεχόμενο, animations & βίντεο.',
      en: 'Interactive content, animations & videos.'
    },
    description: {
      el: 'Δημιουργώ διαδραστικό περιεχόμενο, animations και βίντεο για ιστοσελίδες, καμπάνιες και social media.',
      en: 'I create interactive content, animations, and videos for websites, campaigns, and social media.'
    },
    icon: FaPhotoVideo,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Δημιουργία Multimedia Περιεχομένου'],
      en: ['Services', 'Multimedia Content Creation']
    }
  },
  {
    slug: 'ux-ui-design',
    title: {
      el: 'UX/UI Design',
      en: 'UX/UI Design'
    },
    shortDescription: {
      el: 'Φιλικά & αποδοτικά interfaces.',
      en: 'User-friendly & efficient interfaces.'
    },
    description: {
      el: 'Σχεδιάζω φιλικά προς τον χρήστη και αποδοτικά interfaces με έμφαση στη χρηστικότητα και την εμπειρία.',
      en: 'I design user-friendly and efficient interfaces with a strong focus on usability and experience.'
    },
    icon: FaPalette,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'UX/UI Design'],
      en: ['Services', 'UX/UI Design']
    },
    features: {
      el: [
        'Σχεδιασμός με βάση την εμπειρία χρήστη',
        'Mockups & interactive prototypes',
        'Σύγχρονα design systems',
        'Αισθητική και λειτουργικότητα',
        'User flows & animations για καλύτερη πλοήγηση'
      ]
    },
    visual: 'UI.png',
    ctaText: { el: 'Ζητήστε Demo' },
  },
  {
    slug: 'database-cloud-infrastructure',
    title: {
      el: 'Βάσεις Δεδομένων & Cloud Υποδομές',
      en: 'Database & Cloud Infrastructure'
    },
    shortDescription: {
      el: 'Ασφαλείς, επεκτάσιμες λύσεις βάσεων & cloud.',
      en: 'Secure, scalable database & cloud solutions.'
    },
    description: {
      el: 'Διαχειρίζομαι βάσεις δεδομένων και υλοποιώ ασφαλείς, επεκτάσιμες cloud-based λύσεις.',
      en: 'I manage databases and implement secure, scalable cloud-based solutions.'
    },
    icon: FaDatabase,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Βάσεις Δεδομένων & Cloud Υποδομές'],
      en: ['Services', 'Database & Cloud Infrastructure']
    }
  },
  {
    slug: 'ai-integration-applications',
    title: {
      el: 'Ενσωμάτωση AI σε Εφαρμογές',
      en: 'AI Integration in Applications'
    },
    shortDescription: {
      el: 'ML για ανάλυση δεδομένων, προβλέψεις & smart apps.',
      en: 'ML for data analysis, predictions & smart apps.'
    },
    description: {
      el: 'Χρησιμοποιώ τεχνικές machine learning για ανάλυση δεδομένων, προβλέψεις ή δημιουργία έξυπνων λειτουργιών σε εφαρμογές.',
      en: 'I use machine learning techniques to analyze data, generate predictions, or create smart app functionalities.'
    },
    icon: FaBrain,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Ενσωμάτωση AI σε Εφαρμογές'],
      en: ['Services', 'AI Integration in Applications']
    },
    features: {
      el: [
        'Συστάσεις προϊόντων με AI',
        'Ανάλυση δεδομένων & προβλέψεις',
        'Αυτοματισμοί για επιχειρήσεις',
        'Ενσωμάτωση σε υπάρχουσες εφαρμογές',
        'Ασφαλής διαχείριση δεδομένων'
      ]
    },
    visual: 'ai.png',
    ctaText: { el: 'Επικοινωνήστε' },
  },
  {
    slug: 'ecommerce-development',
    title: {
      el: 'Κατασκευή E-shop',
      en: 'E-commerce Development'
    },
    shortDescription: {
      el: 'Λειτουργικά, responsive e-shops για κάθε επιχείρηση.',
      en: 'Functional, responsive e-shops for all businesses.'
    },
    description: {
      el: 'Κατασκευάζω πλήρως λειτουργικά και responsive e-shops για κάθε τύπο επιχείρησης.',
      en: 'I build fully functional and responsive e-shops for businesses of all types.'
    },
    icon: FaShoppingCart,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Κατασκευή E-shop'],
      en: ['Services', 'E-commerce Development']
    },
    features: {
      el: [
        'Πλήρης διαχείριση προϊόντων & παραγγελιών',
        'Ασφαλείς πληρωμές & checkout animations',
        'Responsive design για κάθε συσκευή',
        'Ενσωμάτωση με ERP, CRM, social media',
        'Εύκολη επέκταση & υποστήριξη'
      ]
    },
    visual: 'ecommerce.jpg',
    ctaText: { el: 'Ξεκινήστε το E-Shop σας σήμερα' },
  },
  {
    slug: 'game-development',
    title: {
      el: 'Game Development',
      en: 'Game Development'
    },
    shortDescription: {
      el: 'Διαδραστικά παιχνίδια για web, desktop & mobile.',
      en: 'Interactive games for web, desktop & mobile.'
    },
    description: {
      el: 'Αναπτύσσω διαδραστικά παιχνίδια για web, desktop και mobile πλατφόρμες με σύγχρονα frameworks και engines.',
      en: 'I develop interactive games for web, desktop, and mobile platforms using modern frameworks and engines.'
    },
    icon: FaGamepad,
    breadcrumbs: {
      el: ['Υπηρεσίες', 'Game Development'],
      en: ['Services', 'Game Development']
    }
  }
]; 