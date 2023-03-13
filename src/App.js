import React, {useEffect, useState} from 'react';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import CardList from './components/CardList';
import ExerciseSelectForm from './components/ExerciseSelectForm';
import RenderExercisePage from './components/ExercisePage.js';
import { getDatabase, ref, set, push, onValue } from 'firebase/database'
import { FormSubmit } from './components/FormSubmit.js';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; //import router
import RenderHomePage from './components/HomePage.js';

function App(props) {

  return (
    <Routes>
      <Route path=':exerciseName' element={<RenderExercisePage />} />
      <Route index element={<RenderHomePage />} />
    </Routes>
  )

}


export default App;