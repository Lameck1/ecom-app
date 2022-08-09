import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
