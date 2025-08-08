import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './VoiceAssistant.module.css';

interface VoiceAssistantProps {
  onClose: () => void;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ onClose }) => {
  const { i18n } = useTranslation();
  const [isListening, setIsListening] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [conversation, setConversation] = useState<Array<{speaker: string, text: string, timestamp: string}>>([]);
  const [currentInput, setCurrentInput] = useState('');
  const conversationRef = useRef<HTMLDivElement>(null);

  const responses = {
    en: {
      greeting: "Hello! I'm your AI hotel assistant. How can I help you today?",
      booking: "I'd be happy to help you with a room reservation. What dates are you looking for?",
      concierge: "Certainly! I can help with restaurant recommendations, local attractions, or transportation. What would you like to know?",
      support: "I'm here to help with any issues. Could you please describe what you're experiencing?",
      default: "I understand. Let me connect you with the right department to assist you further."
    },
    ru: {
      greeting: "Здравствуйте! Я ваш AI-ассистент отеля. Как я могу вам помочь?",
      booking: "Буду рад помочь вам с бронированием номера. На какие даты вы ищете размещение?",
      concierge: "Конечно! Я могу помочь с рекомендациями ресторанов, местными достопримечательностями или транспортом. Что бы вы хотели узнать?",
      support: "Я здесь, чтобы помочь с любыми вопросами. Не могли бы вы описать, что вас беспокоит?",
      default: "Понимаю. Позвольте мне соединить вас с нужным отделом для дальнейшей помощи."
    }
  };

  useEffect(() => {
    // Initial greeting
    const lang = i18n.language || 'en';
    const greeting = responses[lang as keyof typeof responses]?.greeting || responses.en.greeting;
    
    setTimeout(() => {
      addMessage('assistant', greeting);
    }, 1000);
  }, [i18n.language]);

  useEffect(() => {
    // Scroll to bottom when new message is added
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [conversation]);

  const addMessage = (speaker: string, text: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setConversation(prev => [...prev, { speaker, text, timestamp }]);
  };

  const getAIResponse = (userInput: string) => {
    const lang = i18n.language || 'en';
    const langResponses = responses[lang as keyof typeof responses] || responses.en;
    
    const input = userInput.toLowerCase();
    
    if (input.includes('book') || input.includes('reservation') || input.includes('room') || 
        input.includes('бронир') || input.includes('номер')) {
      return langResponses.booking;
    } else if (input.includes('restaurant') || input.includes('attraction') || input.includes('transport') ||
               input.includes('ресторан') || input.includes('достопримечательност') || input.includes('транспорт')) {
      return langResponses.concierge;
    } else if (input.includes('problem') || input.includes('issue') || input.includes('help') ||
               input.includes('проблем') || input.includes('помощ')) {
      return langResponses.support;
    } else {
      return langResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    // Add user message
    addMessage('user', currentInput);
    const userMessage = currentInput;
    setCurrentInput('');

    // Simulate AI processing
    setIsResponding(true);
    
    setTimeout(() => {
      const response = getAIResponse(userMessage);
      addMessage('assistant', response);
      setIsResponding(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const simulateVoiceInput = () => {
    setIsListening(true);
    
    const sampleInputs = {
      en: [
        "I'd like to book a room for tonight",
        "Can you recommend a good restaurant nearby?",
        "The WiFi in my room isn't working",
        "What time is checkout?",
        "Do you have a spa?"
      ],
      ru: [
        "Я хотел бы забронировать номер на сегодня",
        "Можете порекомендовать хороший ресторан поблизости?",
        "Wi-Fi в моем номере не работает",
        "Во сколько выезд?",
        "У вас есть спа?"
      ]
    };

    const lang = i18n.language || 'en';
    const inputs = sampleInputs[lang as keyof typeof sampleInputs] || sampleInputs.en;
    const randomInput = inputs[Math.floor(Math.random() * inputs.length)];

    setTimeout(() => {
      setIsListening(false);
      setCurrentInput(randomInput);
    }, 2000);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.status}>
            <div className={styles.statusIndicator}></div>
            <span>🤖 AI Assistant</span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <div className={styles.conversation} ref={conversationRef}>
          {conversation.map((message, index) => (
            <div key={index} className={`${styles.message} ${styles[message.speaker]}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageText}>{message.text}</div>
                <div className={styles.messageTime}>{message.timestamp}</div>
              </div>
            </div>
          ))}
          {isResponding && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <div className={styles.messageContent}>
                <div className={styles.typing}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.inputArea}>
          <div className={styles.inputGroup}>
            <button 
              className={`${styles.voiceBtn} ${isListening ? styles.listening : ''}`}
              onClick={simulateVoiceInput}
              disabled={isListening}
            >
              🎤
            </button>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className={styles.textInput}
              disabled={isListening}
            />
            <button 
              className={styles.sendBtn}
              onClick={handleSendMessage}
              disabled={!currentInput.trim() || isListening}
            >
              📤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
