import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {   HashRouter  as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
 
import globale_fr from "./locales/fr/traduction.json";
import { createRoot } from 'react-dom/client';
 

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "fr",
  resources: {
    fr: {
      global: globale_fr,
    },
   
  },
});
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
<Router>
<I18nextProvider i18n={i18next}>
  <App />
  </I18nextProvider>
   </Router>);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
