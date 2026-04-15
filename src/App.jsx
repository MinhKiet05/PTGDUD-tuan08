import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import SearchPage from './pages/searchPage/SearchPage';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router></div>
  );
}

export default App;