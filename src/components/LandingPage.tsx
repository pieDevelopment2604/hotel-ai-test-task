import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DemoSection from './DemoSection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
