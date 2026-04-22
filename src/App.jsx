import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import SearchPage from './pages/searchPage/SearchPage';
import RecipeBoxPage from './pages/recipeBoxPage/RecipeBoxPage';
import Subscribe from './pages/subscribe/Subscribe';
import Dashboard from './pages/dashboardPage/Dashboard';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/recipe-box" element={<RecipeBoxPage />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router></div>
  );
}

export default App;