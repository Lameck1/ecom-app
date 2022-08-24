import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, Login, Register, Reset } from './pages';
import { Header, Footer } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: '1px solid green',
            },
          },
          error: {
            style: {
              border: '1px solid red',
            },
          },
        }}
      />
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
