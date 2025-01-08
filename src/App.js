import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '/Users/akshika/Desktop/GitHub/personal-portfolio/src/Pages/Home.js';
import Contact from '/Users/akshika/Desktop/GitHub/personal-portfolio/src/Pages/Contact.js';
import Projects from '/Users/akshika/Desktop/GitHub/personal-portfolio/src/Pages/Projects.js';

/* This is the main App screen */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

// add an experience section later

export default App;