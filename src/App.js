import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import { SignupLogin } from './components/LoginSignup/SignupLogin';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Navbar } from './components/Navbar/Navbar';
import { Dropdown } from './components/Navbar/Dropdown';
import { MainPage } from './components/MainPage/MainPage';
import { AboveFooter } from './components/AboveFooter/AboveFooter';
import { Footer } from './components/Footer/Footer';
import { Categories } from './components/Categories/Categories';
import { JobFields } from './components/JobFields/JobFields';
import { AboutCompany } from './components/AboutCompany/AboutCompany';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route exact path="/" element={<LoginSignup />} />

          <Route exact path="/signuplogin" element={<SignupLogin />} />

          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/AboutCompany" element={<Companies />} />

        </Routes>

      </Router>
    </>
  );

  function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
          // console.log('ABC');
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <MainPage />
        <Categories />
        <JobFields />
        <LandingPage />
        <AboveFooter />
        <Footer />
      </>
      );
  }

  function Companies(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
          // console.log('ABC');
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <AboutCompany />
        <Footer />
      </>
      );
  }

}

export default App;
