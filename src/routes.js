import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Apilist from './pages/apiList';
import Commentemail from './pages/commentEmail';
import Usercomp from './pages/userChar';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Apilist />} />
      <Route path="/comment-email" element={<Commentemail />} />
      <Route path="/user-char" element={<Usercomp />} />
    </Routes>
  );
};

export default RoutePage;
