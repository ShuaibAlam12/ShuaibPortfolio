import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Banner from './components/Banner/Banner.js';
import Features from './components/Features/Features';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contacts from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className='max-w-screen-2xl mx-auto px-16'>
        <Navbar />
        <div className='max-w-screen-2xl mx-auto px-16'>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contacts />
        <Footer />
        <FooterBottom />
        </div>
      </div>
    </div>

  );
}

export default App;
