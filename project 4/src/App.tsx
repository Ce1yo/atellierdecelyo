import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DeliveryOptions from './components/DeliveryOptions';
import QuoteForm from './components/QuoteForm';
import DesignForm from './components/DesignForm';
import Checkout from './pages/Checkout';
import LegalNotice from './pages/legal/LegalNotice';
import TermsOfSale from './pages/legal/TermsOfSale';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import CookiePolicy from './pages/legal/CookiePolicy';
import ShippingPolicy from './pages/legal/ShippingPolicy';
import ReturnPolicy from './pages/legal/ReturnPolicy';
import Footer from './components/Footer';

function App() {
  const [isBusinessClient, setIsBusinessClient] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Header
          isBusinessClient={isBusinessClient}
          setIsBusinessClient={setIsBusinessClient}
        />
        <Routes>
          <Route path="/" element={
            <main className="pt-20">
              <Hero isBusinessClient={isBusinessClient} />
              <Features isBusinessClient={isBusinessClient} />
              {!isBusinessClient && <DeliveryOptions />}
              {isBusinessClient ? <QuoteForm /> : <DesignForm />}
            </main>
          } />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/cgv" element={<TermsOfSale />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/politique-cookies" element={<CookiePolicy />} />
          <Route path="/livraison" element={<ShippingPolicy />} />
          <Route path="/retours" element={<ReturnPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;