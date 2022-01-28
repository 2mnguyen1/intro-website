import React from 'react';
import Navbar from './components/Navbar'
import Intro from './components/pages/Intro'
import PageContent from './components/pages/PageContent'
import PageContent2 from './components/pages/PageContent2'
import PageContent3 from './components/pages/PageContent3'
import Footer from './components/pages/Footer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />}/>
        </Routes>
        <Intro />
        <PageContent />
        <PageContent2 />
        <PageContent3 />
        <Footer />
      </Router>
    </>
  );
}

export default App;
