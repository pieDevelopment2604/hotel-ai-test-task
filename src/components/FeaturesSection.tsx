import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FeaturesSection.module.css';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '⏰',
      titleKey: 'features.feature1.title',
      descriptionKey: 'features.feature1.description',
      color: '#10b981'
    },
    {
      icon: '🗣️',
      titleKey: 'features.feature2.title',
      descriptionKey: 'features.feature2.description',
      color: '#3b82f6'
    },
    {
      icon: '⚡',
      titleKey: 'features.feature3.title',
      descriptionKey: 'features.feature3.description',
      color: '#f59e0b'
    },
    {
      icon: '🌍',
      titleKey: 'features.feature4.title',
      descriptionKey: 'features.feature4.description',
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('features.title')}</h2>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div 
                className={styles.featureIcon}
                style={{ '--feature-color': feature.color } as React.CSSProperties}
              >
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>
                {t(feature.titleKey)}
              </h3>
              <p className={styles.featureDescription}>
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
