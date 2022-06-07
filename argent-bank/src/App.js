import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Sign from "./pages/Sign/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Sign />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
