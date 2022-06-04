import React from "react";
import NavBare from "./components/header/Header";
import ResponsiveAppBar from './components/muiNavBar/MuiNavBar'
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
        <Route exact path="/" element={ <> <ResponsiveAppBar/><Home /><Apropos/><Footer/></>} />
        <Route path="/Carte" element={<CardMaps/>} />
        <Route path="/:id" element={<><RestauDetail /><Apropos/></>} />
      </Routes>
    </div>
  );
}

export default App;
