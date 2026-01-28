import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { InviteProvider } from './contexts/InviteContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Scripts from './pages/Scripts';
import Materials from './pages/Materials';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';
import Platform from './pages/Platform';

function App() {
  return (
    <LanguageProvider>
      <InviteProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scripts" element={<Scripts />} />
              <Route path="/materials" element={<Materials />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/platform" element={<Platform />} />
            </Routes>
          </Layout>
        </Router>
      </InviteProvider>
    </LanguageProvider>
  );
}

export default App;
