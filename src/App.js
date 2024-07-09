import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing'; // Ensure you have a Pricing component
import Premium from './components/Premium/Premium';
import Home from './components/Home/Home'; // Assuming your home page is in the Home component
import SignIn from './components/SignIn/SignIn'; // Ensure you have a SignIn component
import GetStarted from './components/GetStarted/GetStarted'; // Ensure you have a GetStarted component

const App = () => {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Premium', href: '/premium' },
    { name: 'Sign In', href: '/signin' },
  ];

  const buttonLink = { name: 'Get Started', href: '/getstarted' };
  const logo = 'path/to/your/logo.png'; // Replace with the path to your logo

  return (
    <Router>
      <Navbar links={links} buttonLink={buttonLink} logo={logo} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
