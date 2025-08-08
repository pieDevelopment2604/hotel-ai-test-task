import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VoiceAssistant from './VoiceAssistant';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);

  const handleDemo = () => {
    const demoSection = document.getElementById('demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTalkToAssistant = () => {
    setShowVoiceAssistant(true);
  };

  const handleScheduleCall = () => {
    // Simulate scheduling functionality
    alert('Schedule call functionality would be integrated here with calendar system');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🤖</span>
            AI-Powered Hotel Assistant
          </div>
          
          <h1 className={styles.title}>
            {t('hero.title')}
            <span className={styles.subtitle}>{t('hero.subtitle')}</span>
          </h1>
          
          <p className={styles.description}>
            {t('hero.description')}
          </p>
          
          <div className={styles.ctaGroup}>
            <button className={styles.ctaPrimary} onClick={handleDemo}>
              <span className={styles.ctaIcon}>🎯</span>
              {t('hero.cta')}
            </button>
            <button className={styles.ctaSecondary} onClick={handleScheduleCall}>
              <span className={styles.ctaIcon}>📅</span>
              {t('hero.ctaSecondary')}
            </button>
          </div>
          
          <div className={styles.talkButton}>
            <button className={styles.talkToAssistant} onClick={handleTalkToAssistant}>
              <span className={styles.ctaIcon}>💬</span>
              {t('hero.talkToAssistant')}
            </button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Availability</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Accuracy</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.phoneDemo}>
            <div className={styles.phoneScreen}>
              <div className={styles.callInterface}>
                <div className={styles.avatar}>🏨</div>
                <div className={styles.callStatus}>
                  <span className={styles.pulse}></span>
                  AI Assistant Active
                </div>
                <div className={styles.waveform}>
                  <div className={styles.wave}></div>
                  <div className={styles.wave}></div>
                  <div className={styles.wave}></div>
                  <div className={styles.wave}></div>
                  <div className={styles.wave}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showVoiceAssistant && (
        <VoiceAssistant onClose={() => setShowVoiceAssistant(false)} />
      )}
    </section>
  );
};

export default HeroSection;
