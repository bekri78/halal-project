import React from "react";
import NavBare from "./components/header/Header";
import Home from "./components/home/Home";
import CardMaps from "./components/carMap/CardMaps";
import RestauDetail from "./components/restauDetail/RestauDetail";
import Footer from "./components/footer/Footer";
import Apropos from "./components/aPropos/Apropos";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={ <><NavBare/><Home /> <Apropos/><Footer/></>} />
        <Route path="/map" element={<><CardMaps /> <Apropos/><Footer/></>} />
        <Route path="/:id" element={<><RestauDetail /> <Apropos/><Footer/></>} />
      </Routes>
    </div>
  );
}

export default App;
