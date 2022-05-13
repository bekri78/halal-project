import React from 'react'
import NavBare from './components/header/Header'
 import Home from './components/home/Home'
 import CardMaps from './components/carMap/CardMaps';
 import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
     
      <Routes>
                <Route  exact  path="/"  element={<Home/>}  />
                <Route exact path="/map"  element={  <CardMaps/> }  />
           
              </Routes>
    </div>
  );
}

export default App;
