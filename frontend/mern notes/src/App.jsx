import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import HomePage from './pages/HomePage'; // ✅ Make sure this path is correct
import CreatePage from './pages/CreatePage'; // ✅ Make sure this path is correct
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path='/' element={<HomePage />} /> {/* ✅ Renders Navbar */}
        <Route path='/create' element={<CreatePage />} />
        <Route path='/note/:id' element={<NoteDetailPage />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
