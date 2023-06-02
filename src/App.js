import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Getintouch from "./components/Getintouch";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Getintouch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
