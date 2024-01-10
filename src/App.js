
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Home from './Home';
import Industries from './Industries';
import AISoftware from './AISoftware';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Matter from './Matter';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
    <Matter/>
        <div className="content">
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/industries" component={Industries} />
            <Route path="/ai-software" component={AISoftware} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact us" component={ContactUs} />
            </Routes>
        </div>
        
      </div>
    </Router>
  

  );
};

export default App;

