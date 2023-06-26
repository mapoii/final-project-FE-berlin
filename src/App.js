import './App.css';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import FeaturesTilesSection from './components/FeaturesTilesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
<>
  {/* Hello world */}
  <div className="body-wrap">
    <main className="site-content">
      <div>
        <HeaderComponent/>
      </div>
      <div>
      <HeroSection />
    </div>
    <div>
      <ClientsSection />
    </div>
    <div className="app">
      <FeaturesTilesSection />
    </div>
    <div>
      <PricingSection />
    </div>
    </main>
    <div>
      <Footer />
    </div>
  </div>
</>

  );
}

export default App;
