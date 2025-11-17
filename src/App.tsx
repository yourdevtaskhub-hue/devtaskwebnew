import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ChatbotSection from './components/ChatbotSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetails';
import ScrollToTop from './components/ScrollToTop';
import HomeShowcaseSection from './components/HomeShowcaseSection';
import TermsAndConditions from './components/TermsAndConditions';
import WebDevelopmentPage from './components/WebDevelopmentPage';
import MobileAppDevelopmentPage from './components/MobileAppDevelopmentPage';
import ChatbotsAIAgentsPage from './components/ChatbotsAIAgentsPage';
import SocialMediaManagementPage from './components/SocialMediaManagementPage';
import SEOWebsiteOptimizationPage from './components/SEOWebsiteOptimizationPage';
import UXUIDesignPage from './components/UXUIDesignPage';
import AIIntegrationApplicationsPage from './components/AIIntegrationApplicationsPage';
import EcommerceDevelopmentPage from './components/EcommerceDevelopmentPage';
import GameDevelopmentPage from './components/GameDevelopmentPage';
import VideoAnimationProductionPage from './components/VideoAnimationProductionPage';
import DatabaseCloudInfrastructurePage from './components/DatabaseCloudInfrastructurePage';
import { Helmet } from 'react-helmet';
// Προσθήκη placeholders για όλες τις υπηρεσίες
const Placeholder = ({ name }: { name: string }) => <div style={{padding:40, textAlign:'center', color:'#555'}}>Η σελίδα "{name}" δεν έχει υλοποιηθεί ακόμα.</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="min-h-screen">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={
              <>
                <Helmet>
                  <title>DevTaskHub | Κατασκευή Custom Ιστοσελίδων & Mobile Εφαρμογών</title>
                  <meta name="description" content="Κατασκευή custom ιστοσελίδων, e-shop, mobile apps, AI και SEO από εξειδικευμένη ομάδα στη Θεσσαλονίκη. Responsive design, ταχύτητα, ασφάλεια, υποστήριξη." />
                </Helmet>
                <Hero />
                <HomeShowcaseSection />
                <Services />
                <About />
                <Portfolio />
                <ChatbotSection />
                <Contact />
              </>
            } />
            <Route path="/services" element={<Services />} />
            {/* Εδώ θα μπουν τα νέα premium service pages, π.χ.: */}
            <Route path="/services/web-development" element={
              <>
                <Helmet>
                  <title>Web Development | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Κατασκευή μοντέρνων ιστοσελίδων και web εφαρμογών με ταχύτητα, ασφάλεια και responsive design από την ομάδα DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <WebDevelopmentPage />
              </>
            } />
            <Route path="/services/mobile-app-development" element={
              <>
                <Helmet>
                  <title>Mobile App Development | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Ανάπτυξη mobile εφαρμογών για Android & iOS με έμφαση στην εμπειρία χρήστη και την απόδοση. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <MobileAppDevelopmentPage />
              </>
            } />
            <Route path="/services/chatbots-ai-agents" element={
              <>
                <Helmet>
                  <title>Chatbots & AI Agents | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Έξυπνα chatbots και AI agents για αυτοματοποίηση επικοινωνίας και υποστήριξη πελατών. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <ChatbotsAIAgentsPage />
              </>
            } />
            <Route path="/services/social-media-management" element={
              <>
                <Helmet>
                  <title>Social Media Management | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Διαχείριση social media, δημιουργία περιεχομένου και στρατηγική για επιχειρήσεις. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <SocialMediaManagementPage />
              </>
            } />
            <Route path="/services/video-animation-production" element={
              <>
                <Helmet>
                  <title>Video & Animation Production | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Παραγωγή επαγγελματικών βίντεο και animations για προώθηση, εκπαίδευση και διαφήμιση. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <VideoAnimationProductionPage />
              </>
            } />
            <Route path="/services/seo-website-optimization" element={
              <>
                <Helmet>
                  <title>SEO Website Optimization | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="SEO, βελτιστοποίηση ιστοσελίδων και αύξηση οργανικής επισκεψιμότητας. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <SEOWebsiteOptimizationPage />
              </>
            } />
            <Route path="/services/multimedia-content-creation" element={<Placeholder name="Multimedia Content Creation" />} />
            <Route path="/services/ux-ui-design" element={
              <>
                <Helmet>
                  <title>UX/UI Design | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Σχεδιασμός φιλικών και αποδοτικών interfaces με έμφαση στη χρηστικότητα και την εμπειρία. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <UXUIDesignPage />
              </>
            } />
            <Route path="/services/database-cloud-infrastructure" element={
              <>
                <Helmet>
                  <title>Database & Cloud Infrastructure | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Διαχείριση βάσεων δεδομένων και υλοποίηση cloud λύσεων για επιχειρήσεις. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <DatabaseCloudInfrastructurePage />
              </>
            } />
            <Route path="/services/ai-integration-applications" element={
              <>
                <Helmet>
                  <title>AI Integration Applications | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Ενσωμάτωση AI και machine learning σε εφαρμογές για ανάλυση δεδομένων και αυτοματοποίηση. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <AIIntegrationApplicationsPage />
              </>
            } />
            <Route path="/services/ecommerce-development" element={
              <>
                <Helmet>
                  <title>E-commerce Development | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Κατασκευή e-shop και ηλεκτρονικών καταστημάτων με σύγχρονες δυνατότητες. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <EcommerceDevelopmentPage />
              </>
            } />
            <Route path="/services/game-development" element={
              <>
                <Helmet>
                  <title>Game Development | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Ανάπτυξη διαδραστικών παιχνιδιών για web, desktop και mobile πλατφόρμες. DevTaskHub στη Θεσσαλονίκη." />
                </Helmet>
                <GameDevelopmentPage />
              </>
            } />
            {/* <Route path="/services/:slug" element={<ServiceDetails />} /> */}
            <Route path="/contact" element={
              <>
                <Helmet>
                  <title>Επικοινωνία | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Επικοινωνήστε με την ομάδα DevTaskHub για προσφορά ή απορίες σχετικά με τις υπηρεσίες μας." />
                </Helmet>
                <Contact />
              </>
            } />
            <Route path="/contactme" element={
              <>
                <Helmet>
                  <title>Επικοινωνία | DevTaskHub Θεσσαλονίκη</title>
                  <meta name="description" content="Επικοινωνήστε με την ομάδα DevTaskHub για προσφορά ή απορίες σχετικά με τις υπηρεσίες μας." />
                </Helmet>
                <Contact />
              </>
            } />
            <Route path="/terms" element={
              <>
                <Helmet>
                  <title>Όροι & Προϋποθέσεις | DevTaskHub</title>
                  <meta name="description" content="Όροι χρήσης και προϋποθέσεις για τις υπηρεσίες της DevTaskHub." />
                </Helmet>
                <TermsAndConditions />
              </>
            } />
          </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;