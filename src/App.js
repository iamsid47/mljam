import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Getintouch from "./components/Getintouch";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Getintouch />} />
          <Route exact path="/sponsors" element={<Sponsors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
