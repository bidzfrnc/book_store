import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/createBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/deleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/book/create' element={<CreateBook />} />
      <Route path='/book/details/:id' element={<ShowBook />} />
      <Route path='/book/edit/:id' element={<EditBook />} />
      <Route path='/book/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App
