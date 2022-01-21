import './App.css';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import { SignupLogin } from './components/LoginSignup/SignupLogin';
import { Navbar } from './components/Navbar/Navbar';
import { Dropdown } from './components/Navbar/Dropdown';
import { Footer } from './components/Footer/Footer';
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

          <Route exact path="/AboutUs" element={<Us />} />

          <Route exact path="/Jobs" element={<Job />} />

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
        <Footer />
      </>
      );
  }

  function Us(){
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
        <Footer />
      </>
      );
  }

  function Job(){
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
        <Footer />
      </>
      );
  }
}

export default App;
