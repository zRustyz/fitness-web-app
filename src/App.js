import React, {useEffect, useState} from 'react';
import RenderExercisePage from './components/ExercisePage.js';
import { getDatabase, ref, set, push, onValue } from 'firebase/database'
import { FormSubmit } from './components/FormSubmit.js';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'; //import router
import RenderHomePage from './components/HomePage.js';
import Form from './components/Form';
import About from './components/About';

function App(props) {

  return (
    <div className="container-fluid d-flex flex-column">
    <Routes>
      <Route path=':exerciseName' element={<RenderExercisePage />} />
      <Route path='/form' element={<Form />} />
      <Route path='/about' element={<About />} />
      <Route index element={<RenderHomePage />} />
    </Routes>
    </div>
  )
}


export default App;