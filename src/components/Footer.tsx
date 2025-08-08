import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🏨</span>
              <span className={styles.logoText}>{t('footer.company')}</span>
            </div>
            <p className={styles.tagline}>{t('footer.tagline')}</p>
          </div>
          
          <div className={styles.links}>
            <a href="#" className={styles.link}>{t('footer.links.privacy')}</a>
            <a href="#" className={styles.link}>{t('footer.links.terms')}</a>
            <a href="#" className={styles.link}>{t('footer.links.support')}</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 {t('footer.company')}. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>🐦</a>
            <a href="#" className={styles.socialLink}>💼</a>
            <a href="#" className={styles.socialLink}>📧</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
