import { ReactNode } from 'react';
import { FaGlobe, FaMobileAlt, FaRobot, FaUsers, FaVideo, FaSearch, FaPhotoVideo, FaPalette, FaDatabase, FaBrain, FaShoppingCart, FaGamepad } from 'react-icons/fa';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: any; // Changed from IconType to any as IconType is no longer imported
  breadcrumbs: string[];
}

const servicesData: Service[] = [
  {
    slug: 'web-development',
    title: 'Website & Web App Development',
    shortDescription: 'Responsive websites & web apps with modern tech.',
    description: 'We design and implement fully responsive websites and web applications using modern front-end and back-end technologies.',
    icon: FaGlobe,
    breadcrumbs: ['Services', 'Website & Web App Development']
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDescription: 'Mobile apps for Android & iOS with great UX.',
    description: 'I create mobile apps for Android and iOS focusing on usability, performance, and user experience.',
    icon: FaMobileAlt,
    breadcrumbs: ['Services', 'Mobile App Development']
  },
  {
    slug: 'chatbots-ai-agents',
    title: 'Chatbots & AI Agents',
    shortDescription: 'Smart digital assistants & conversational AI.',
    description: 'I develop smart digital assistants and conversational systems using AI for automated customer communication and support.',
    icon: FaRobot,
    breadcrumbs: ['Services', 'Chatbots & AI Agents']
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    shortDescription: 'Strategic & daily management of social profiles.',
    description: 'Strategic and daily management of profiles on Facebook, Instagram, LinkedIn, and more.',
    icon: FaUsers,
    breadcrumbs: ['Services', 'Social Media Management']
  },
  {
    slug: 'video-animation-production',
    title: 'Video & Animation Production',
    shortDescription: 'Videos & animations for promo, education, or ads.',
    description: 'Creation and editing of videos and animations for promotional, educational, or commercial use.',
    icon: FaVideo,
    breadcrumbs: ['Services', 'Video & Animation Production']
  },
  {
    slug: 'seo-website-optimization',
    title: 'SEO – Website Optimization',
    shortDescription: 'Improve site ranking with technical SEO & content.',
    description: 'Improve site ranking in search engines (e.g., Google) through technical SEO and content strategies.',
    icon: FaSearch,
    breadcrumbs: ['Services', 'SEO – Website Optimization']
  },
  {
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    shortDescription: 'User-friendly & efficient interfaces.',
    description: 'I design user-friendly and efficient interfaces with a strong focus on usability and experience.',
    icon: FaPalette,
    breadcrumbs: ['Services', 'UX/UI Design']
  },
  {
    slug: 'database-cloud-infrastructure',
    title: 'Database & Cloud Infrastructure',
    shortDescription: 'Secure, scalable database & cloud solutions.',
    description: 'I manage databases and implement secure, scalable cloud-based solutions.',
    icon: FaDatabase,
    breadcrumbs: ['Services', 'Database & Cloud Infrastructure']
  },
  {
    slug: 'ai-integration-applications',
    title: 'AI Integration in Applications',
    shortDescription: 'ML for data analysis, predictions & smart apps.',
    description: 'I use machine learning techniques to analyze data, generate predictions, or create smart app functionalities.',
    icon: FaBrain,
    breadcrumbs: ['Services', 'AI Integration in Applications']
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    shortDescription: 'Functional, responsive e-shops for all businesses.',
    description: 'I build fully functional and responsive e-shops for businesses of all types.',
    icon: FaShoppingCart,
    breadcrumbs: ['Services', 'E-commerce Development']
  },
  {
    slug: 'game-development',
    title: 'Game Development',
    shortDescription: 'Interactive games for web, desktop & mobile.',
    description: 'I develop interactive games for web, desktop, and mobile platforms using modern frameworks and engines.',
    icon: FaGamepad,
    breadcrumbs: ['Services', 'Game Development']
  }
];

export default servicesData;
export { servicesData }; 