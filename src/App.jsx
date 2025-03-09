import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Apply from './pages/Apply';
import Contact from './pages/Contact';
import InvestorLogin from './pages/InvestorLogin';
import InvestorDashboard from './pages/InvestorDashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investor-login" element={<InvestorLogin />} />
          <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;