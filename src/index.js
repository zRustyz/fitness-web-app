import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import EXERCISE_DATA from './data/exercise-data.json'; //the data to display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App gameData={EXERCISE_DATA} />
  </React.StrictMode>
);
