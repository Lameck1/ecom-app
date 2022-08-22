import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, Login, Register, Reset } from './pages';
import { Header, Footer } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
