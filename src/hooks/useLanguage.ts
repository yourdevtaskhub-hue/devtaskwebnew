import { useState, useEffect } from 'react';

export type Language = 'el' | 'en' | 'fr';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('el');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'el' || savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguageDirect = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'el' ? 'en' : language === 'en' ? 'fr' : 'el';
    setLanguageDirect(newLanguage);
  };

  return { language, toggleLanguage, setLanguage: setLanguageDirect };
};