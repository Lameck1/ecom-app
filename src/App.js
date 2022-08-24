import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contact, Home, Login, Register, Reset } from './pages';
import { Header, Footer } from './components';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config';

function App() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.email);
        console.log(username);
      } else {
        setUsername('');
      }
    });
  }, [username]);


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
      <Header username={username} />
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
