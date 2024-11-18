import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Footer } from "./components/Footer";
import QuizCard from "./components/QuizCard";
import AboutUs from "./components/AboutUs";
import QuizCardsSection from "./components/QuizCardsSection";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> {/* Login Page */}
        <Route path="/signup" element={<SignUp />} /> {/* Signup Page */}
        <Route path="/quiz" element={<QuizCardsSection />} />
        <Route path="/aboutus" element={<AboutUs />} /> 
        <Route path="/quiz/:theme" element={<QuizCard  />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
