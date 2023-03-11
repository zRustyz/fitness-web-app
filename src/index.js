import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import EXERCISE_DATA from './data/exercise-data.json'; //the data to display
import { initializeApp } from "firebase/app"; //import firebase
import { BrowserRouter } from 'react-router-dom';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqc0skaCI4Fujqz8Nc4yKnXYrFT55ZCXQ",
  authDomain: "fitness-style.firebaseapp.com",
  databaseURL: "https://fitness-style-default-rtdb.firebaseio.com",
  projectId: "fitness-style",
  storageBucket: "fitness-style.appspot.com",
  messagingSenderId: "645510946811",
  appId: "1:645510946811:web:27b531861de9b1219f355e"
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
