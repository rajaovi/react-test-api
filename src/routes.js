import React from "react";
import { Routes, Route } from "react-router-dom";

import Apilist from "./pages/apiList";
import Commentemail from "./pages/commentEmail";
import Userchar from "./pages/userChar";
import Photolist from "./pages/photos";
import SortingTable from "./pages/sorting";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Apilist />} />
      <Route path="/comment-email" element={<Commentemail />} />
      <Route path="/user-char" element={<Userchar />} />
      <Route path="/photo-list" element={<Photolist />} />
      <Route path="/table-sort" element={<SortingTable />} />
    </Routes>
  );
};

export default RoutePage;
