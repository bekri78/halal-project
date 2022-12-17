import React,{useEffect, useState} from "react";
import ResponsiveAppBar from './components/muiNavBar/MuiNavBar'
import Home from "./components/home/Home";
import CardMaps from "./components/carMap/CardMaps";
import RestauDetail from "./components/restauDetail/RestauDetail";
import Footer from "./components/footer/Footer";
import Apropos from "./components/aPropos/Apropos";
import Compte from "./components/compte/Compte";
import { Route, Routes } from "react-router-dom";
 
import { UserContextModalConnexion } from "./useContext";
import "./App.css";

function App() {
  const [value, setValue] = useState(false)
 
  

 

  return (
    <div className="App">
      
        <UserContextModalConnexion.Provider  value={{value, setValue}}>
      <Routes>
        <Route exact path="/" element={ <><ResponsiveAppBar /><Home /><Apropos/><Footer/></>} />
        <Route path="/Carte" element={<CardMaps/>} />
        <Route path="/:id" element={<><RestauDetail /><Apropos/> <Footer/></>} />
        <Route path="/Compte" element={<Compte/>} />
      </Routes>
        </UserContextModalConnexion.Provider>
    </div>
  );
}

export default App;
