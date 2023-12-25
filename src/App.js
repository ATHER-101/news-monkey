import './App.css';
import React from 'react'
import News from './Components/News';
import Navbar from './Components/Navbar';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

function App() {
  const [search, setSearch] = useState('')

  const exitSearch = ()=>{
    setSearch('');
  }

  return (
    <>
      <Navbar setSearch={setSearch} search={search}/>
      <Routes>
        <Route path='/' element={<News catagory='general' exitSearch={exitSearch} />} />
        <Route path='/business' element={<News catagory='business' exitSearch={exitSearch} />} />
        <Route path='/entertainment' element={<News catagory='entertainment' exitSearch={exitSearch} />} />
        <Route path='/health' element={<News catagory='health' exitSearch={exitSearch} />} />
        <Route path='/science' element={<News catagory='science' exitSearch={exitSearch} />} />
        <Route path='/sports' element={<News catagory='sports' exitSearch={exitSearch} />} />
        <Route path='/technology' element={<News catagory='technology' exitSearch={exitSearch} />} />
        <Route path='/search' element={<News catagory='general' q={search} exitSearch={exitSearch}/>} />
      </Routes>

    </>
  );
}

export default App;
