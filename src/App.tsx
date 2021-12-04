import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
// Containers
import DefaultLayout from './layout/DefaultLayout'


function Home() {
  return (
    <div>
      Home
    </div>
  );
}



function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
