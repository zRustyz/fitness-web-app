import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import EXERCISE_DATA from './data/exercise-data.json'; //the data to display
import { initializeApp } from "firebase/app"; //import firebase
import { BrowserRouter } from 'react-router-dom';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZyGWP_yAAeb-E3JkXnvAP4KOASViycAU",
  authDomain: "fitness-web-app-6b611.firebaseapp.com",
  projectId: "fitness-web-app-6b611",
  storageBucket: "fitness-web-app-6b611.appspot.com",
  messagingSenderId: "169828727523",
  appId: "1:169828727523:web:9dad3d261c949d4f5123d6",
  measurementId: "G-V6ZER9JTG6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Update root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
