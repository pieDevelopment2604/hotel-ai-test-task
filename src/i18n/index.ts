import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        features: "Features",
        demo: "Demo",
        pricing: "Pricing",
        contact: "Contact"
      },
      hero: {
        title: "AI Voice Assistant",
        subtitle: "for Modern Hotels",
        description: "Transform your hotel's guest experience with our intelligent voice assistant. Handle calls, bookings, and guest inquiries 24/7 with natural conversation.",
        cta: "Try Demo",
        ctaSecondary: "Schedule Call",
        talkToAssistant: "Talk to the Assistant"
      },
      features: {
        title: "Why Hotels Choose Our AI",
        feature1: {
          title: "24/7 Availability",
          description: "Never miss a booking or guest inquiry, even during peak hours or overnight"
        },
        feature2: {
          title: "Natural Conversations",
          description: "Advanced NLP understands guest needs and responds like a human concierge"
        },
        feature3: {
          title: "Instant Bookings",
          description: "Process reservations, modifications, and cancellations in real-time"
        },
        feature4: {
          title: "Multi-Language",
          description: "Communicate with international guests in their preferred language"
        }
      },
      demo: {
        title: "Experience the Assistant",
        subtitle: "Click to start a sample conversation",
        callButton: "📞 Start Voice Demo",
        transcript: "Demo transcript will appear here...",
        scenarios: {
          booking: "Room Booking",
          concierge: "Concierge Service",
          support: "Guest Support"
        }
      },
      footer: {
        company: "HotelAI Solutions",
        tagline: "Revolutionizing hospitality with AI",
        links: {
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          support: "Support"
        }
      },
      languages: {
        en: "EN",
        ru: "RU"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        features: "Функции",
        demo: "Демо",
        pricing: "Цены",
        contact: "Контакты"
      },
      hero: {
        title: "Голосовой AI-ассистент",
        subtitle: "для современных отелей",
        description: "Преобразите опыт гостей вашего отеля с помощью нашего умного голосового ассистента. Обрабатывайте звонки, бронирования и запросы гостей 24/7 с естественным разговором.",
        cta: "Попробовать демо",
        ctaSecondary: "Записаться на звонок",
        talkToAssistant: "Поговорить с ассистентом"
      },
      features: {
        title: "Почему отели выбирают наш AI",
        feature1: {
          title: "Доступность 24/7",
          description: "Никогда не упускайте бронирование или запрос гостя, даже в час пик или ночью"
        },
        feature2: {
          title: "Естественные разговоры",
          description: "Продвинутая NLP понимает потребности гостей и отвечает как человек-консьерж"
        },
        feature3: {
          title: "Мгновенные бронирования",
          description: "Обрабатывайте резервации, изменения и отмены в режиме реального времени"
        },
        feature4: {
          title: "Многоязычность",
          description: "Общайтесь с международными гостями на их предпочитаемом языке"
        }
      },
      demo: {
        title: "Испытайте ассистента",
        subtitle: "Нажмите, чтобы начать пример разговора",
        callButton: "📞 Начать голосовое демо",
        transcript: "Расшифровка демо появится здесь...",
        scenarios: {
          booking: "Бронирование номера",
          concierge: "Консьерж-сервис",
          support: "Поддержка гостей"
        }
      },
      footer: {
        company: "HotelAI Solutions",
        tagline: "Революционизируем гостеприимство с помощью AI",
        links: {
          privacy: "Политика конфиденциальности",
          terms: "Условия использования",
          support: "Поддержка"
        }
      },
      languages: {
        en: "EN",
        ru: "RU"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
