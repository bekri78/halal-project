import React from "react";
import NavBare from "./components/header/Header";
import Home from "./components/home/Home";
import CardMaps from "./components/carMap/CardMaps";
import RestauDetail from "./components/restauDetail/RestauDetail";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={  <><NavBare/><Home /></>} />
        <Route exact path="/map" element={<CardMaps />} />
        <Route path="/:id" element={<RestauDetail />} />
      </Routes>
    </div>
  );
}

export default App;
