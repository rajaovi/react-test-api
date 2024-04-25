import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Apilist from './pages/apiList';
import Commentemail from './pages/commentEmail';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Apilist />} />
      <Route path="/comment-email" element={<Commentemail />} />
    </Routes>
  );
};

export default RoutePage;
