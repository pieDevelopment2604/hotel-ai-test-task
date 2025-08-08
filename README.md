# Voice AI Assistant Landing Page

A modern, responsive React TypeScript landing page for a Voice AI Assistant service with internationalization support.

## Features

- **React 18 + TypeScript**: Modern React development with full type safety
- **Internationalization**: Support for English and Russian languages using react-i18next
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Styling**: CSS modules with hover effects and smooth transitions
- **Vite**: Fast development and build tooling
- **Accessibility**: Touch-friendly interface with proper button sizing

## Technologies Used

- React 18
- TypeScript
- Vite
- react-i18next for internationalization
- CSS Modules for component styling
- i18next-browser-languagedetector for automatic language detection

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx          # Main landing page component
│   └── LandingPage.module.css   # Component-specific styles
├── i18n/
│   └── index.ts                 # Internationalization configuration
├── App.tsx                      # Root component
├── App.css                      # Global app styles
├── index.css                    # Global styles
└── main.tsx                     # Application entry point
```

## Internationalization

The app supports automatic language detection and manual language switching between:
- English (en)
- Russian (ru)

Language preference is saved in localStorage for persistence across sessions.

## Mobile Responsiveness

The landing page is optimized for:
- Mobile devices (480px and below)
- Extra small screens (360px and below)
- Landscape orientation on mobile devices
- Touch-friendly interface with proper button sizing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
