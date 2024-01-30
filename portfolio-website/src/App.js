import { useState, useEffect } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import MainPage from 'components/pages/MainPage';


function App() {

  return (
    <>
      {/* Icons by icons8.com */}
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          {/*<Route path='item_pages/:name' element={<ProjectCard?? />} /> */}
        </Routes>
      </div>

    </>
  );
}

export default App;
