 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from  "firebase/compat/app"
import {getFirestore} from "@firebase/firestore"
import "firebase/compat/auth"
 
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
export const db = getFirestore(app)
  