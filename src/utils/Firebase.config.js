 
import { initializeApp } from "firebase/app";
import firebase from  "firebase/compat/app"
import "firebase/compat/auth"
import { getAnalytics } from "firebase/analytics";
 
const app = firebase.initializeApp ( {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "halalfood-dd9d1.firebaseapp.com",
  projectId: "halalfood-dd9d1",
  storageBucket: "halalfood-dd9d1.appspot.com",
  messagingSenderId: "1082537787028",
  appId: "1:1082537787028:web:07f779ddec7a1e29b6fe81",
  measurementId: "G-ELW36BNSDY"
});
export const auth = app.auth()
export default app
 
 