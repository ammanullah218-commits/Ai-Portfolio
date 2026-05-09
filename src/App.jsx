import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Mission from './pages/Mission';
import AITools from './pages/AITools';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;