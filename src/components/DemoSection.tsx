import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './DemoSection.module.css';

const DemoSection: React.FC = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScenario, setCurrentScenario] = useState('booking');
  const [transcript, setTranscript] = useState('');

  const scenarios = {
    booking: {
      icon: '🏨',
      conversation: [
        { speaker: 'guest', text: 'Hi, I\'d like to book a room for tonight.' },
        { speaker: 'ai', text: 'Hello! I\'d be happy to help you with a reservation. What type of room would you prefer?' },
        { speaker: 'guest', text: 'A double room with city view, please.' },
        { speaker: 'ai', text: 'Perfect! I found a deluxe double room with city view available for $180 per night. Shall I proceed with the booking?' }
      ]
    },
    concierge: {
      icon: '🛎️',
      conversation: [
        { speaker: 'guest', text: 'Can you recommend a good restaurant nearby?' },
        { speaker: 'ai', text: 'Certainly! Based on your preferences, I recommend "Blue Harbor" - it\'s a 5-minute walk and serves excellent seafood.' },
        { speaker: 'guest', text: 'Great! Can you make a reservation?' },
        { speaker: 'ai', text: 'I\'ll call them right now. What time would you prefer and for how many people?' }
      ]
    },
    support: {
      icon: '🤝',
      conversation: [
        { speaker: 'guest', text: 'The WiFi in my room isn\'t working.' },
        { speaker: 'ai', text: 'I apologize for the inconvenience. Let me check your room status and send technical support immediately.' },
        { speaker: 'guest', text: 'Thank you, how long will it take?' },
        { speaker: 'ai', text: 'Our technician will be there within 10 minutes. I\'ll also provide you with a temporary mobile hotspot code.' }
      ]
    }
  };

  const startDemo = () => {
    setIsPlaying(true);
    setTranscript('');
    
    const conversation = scenarios[currentScenario as keyof typeof scenarios].conversation;
    let index = 0;
    
    const playNext = () => {
      if (index < conversation.length) {
        const message = conversation[index];
        const speaker = message.speaker === 'ai' ? '🤖 AI Assistant' : '👤 Guest';
        setTimeout(() => {
          setTranscript(prev => prev + `${speaker}: ${message.text}\n\n`);
          index++;
          if (index < conversation.length) {
            playNext();
          } else {
            setTimeout(() => setIsPlaying(false), 1000);
          }
        }, 2000);
      }
    };
    
    playNext();
  };

  return (
    <section id="demo" className={styles.demo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('demo.title')}</h2>
          <p className={styles.subtitle}>{t('demo.subtitle')}</p>
        </div>
        
        <div className={styles.demoInterface}>
          <div className={styles.scenarios}>
            {Object.entries(scenarios).map(([key, scenario]) => (
              <button
                key={key}
                className={`${styles.scenarioBtn} ${currentScenario === key ? styles.active : ''}`}
                onClick={() => setCurrentScenario(key)}
              >
                <span className={styles.scenarioIcon}>{scenario.icon}</span>
                {t(`demo.scenarios.${key}`)}
              </button>
            ))}
          </div>
          
          <div className={styles.demoWindow}>
            <div className={styles.demoHeader}>
              <div className={styles.demoControls}>
                <span className={styles.dot} style={{background: '#ff5f57'}}></span>
                <span className={styles.dot} style={{background: '#ffbd2e'}}></span>
                <span className={styles.dot} style={{background: '#28ca42'}}></span>
              </div>
              <span className={styles.demoTitle}>AI Assistant Demo</span>
            </div>
            
            <div className={styles.demoContent}>
              <div className={styles.transcript}>
                {transcript || t('demo.transcript')}
              </div>
              
              <div className={styles.demoActions}>
                <button 
                  className={`${styles.callBtn} ${isPlaying ? styles.calling : ''}`}
                  onClick={startDemo}
                  disabled={isPlaying}
                >
                  <span className={styles.callIcon}>📞</span>
                  {isPlaying ? 'Demo in Progress...' : t('demo.callButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
