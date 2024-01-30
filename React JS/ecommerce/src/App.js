import Navbar from "./Components/Navbar";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const App=()=> {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
      <LoadingBar height={5} color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products category="" setProgress={setProgress} />} />
          <Route
            exact
            path="/electronics"
            element={<Products category="electronics" setProgress={setProgress} />}
          />
          <Route
            exact
            path="/jewelery"
            element={<Products category="jewelery" setProgress={setProgress} />}
          />
          <Route
            exact
            path="/men's clothing"
            element={<Products category="men's clothing" setProgress={setProgress}/>}
          />
          <Route
            exact
            path="/women's clothing"
            element={<Products category="women's clothing" setProgress={setProgress} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
