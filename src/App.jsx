import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Gaming from './pages/Gaming';

import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <Router>
      <div>
       <Navbar/>
       

        {/* Main content with Routes */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gaming" element={<Gaming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
