import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏨</span>
          <span className={styles.logoText}>HotelAI</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>{t('nav.features')}</a>
          <a href="#demo" className={styles.navLink}>{t('nav.demo')}</a>
          <a href="#pricing" className={styles.navLink}>{t('nav.pricing')}</a>
          <a href="#contact" className={styles.navLink}>{t('nav.contact')}</a>
        </nav>

        <div className={styles.langSwitch}>
          <button
            className={`${styles.langBtn} ${currentLanguage === 'en' ? styles.active : ''}`}
            onClick={() => changeLanguage('en')}
          >
            {t('languages.en')}
          </button>
          <button
            className={`${styles.langBtn} ${currentLanguage === 'ru' ? styles.active : ''}`}
            onClick={() => changeLanguage('ru')}
          >
            {t('languages.ru')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
