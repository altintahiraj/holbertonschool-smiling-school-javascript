import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Bootstrap CSS (required for responsive grid + react-bootstrap components)
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Pages/Home/index.jsx";
import PricingPage from "./Pages/Pricing/index.jsx";
import CoursesPage from "./Pages/Courses/index.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Courses" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
