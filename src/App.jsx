import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from "./pages/TermsOfService";
import DMCA from "./pages/DMCA";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"


export default function App() {
  return (

    <Router>
      
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="/terms-of-service/" element={<TermsOfService/>} />
            <Route path="/dmca" element={<DMCA/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
        {/* Fooeter at bottom*/}
        <Footer />
      </div>

    </Router>
        
  );
};