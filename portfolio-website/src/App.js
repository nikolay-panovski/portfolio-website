import { useState, useEffect } from 'react';

import { Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.css';
import MainPage from 'components/pages/MainPage';
import ProjectPage from 'components/pages/ProjectPage';


function App() {

  return (
    <>
      {/* Icons by icons8.com */}
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='item_pages/:name' element={<ProjectPage />} />
          {/* hacky migration from old portfolio */}
          <Route path='item_pages/memory-puzzle.html' element={<Navigate replace to="../../item_pages/Phone-controllable screens experience"/>} />
          <Route path='item_pages/unity-prototype.html' element={<Navigate replace to="../../item_pages/City games concept prototype"/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
