import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/UploadForm";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Services from "./pages/Services";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/services" element={<Services />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
};
