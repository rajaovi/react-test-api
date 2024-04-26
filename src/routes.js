import React from "react";
import { Routes, Route } from "react-router-dom";

import Apilist from "./pages/apiList";
import Commentemail from "./pages/commentEmail";
import Userchar from "./pages/userChar";
import Photolist from "./pages/photos";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Apilist />} />
      <Route path="/comment-email" element={<Commentemail />} />
      <Route path="/user-char" element={<Userchar />} />
      <Route path="/photo-list" element={<Photolist />} />
    </Routes>
  );
};

export default RoutePage;
