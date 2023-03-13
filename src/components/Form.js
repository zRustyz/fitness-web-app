import React, {useEffect, useState} from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import CardList from './CardList';
import ExerciseSelectForm from './ExerciseSelectForm';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { FormSubmit } from './FormSubmit';


function Form(props) {

  // Push new exercise to database using push method of firebase which is promise-based AJAX requests
  const addExercise = (exerciseName, imgSrc, imgAlt, imgSrcLink, imgSrcSite, link, bodyPart, equipment, instructions, comments) => {
    const newExerciseObj = {
      "exerciseName": exerciseName,
      "imgSrc": imgSrc,
      "imgAlt": imgAlt,
      "imgSrcLink": imgSrcLink,
      "imgSrcSite": imgSrcSite,
      "link": link,
      "bodyPart": bodyPart,
      "equipment": equipment,
      "instructions": instructions,
      "comments": comments
    }

    const db = getDatabase();
    const allExerciseRef = ref(db, "allExercises");
    push(allExerciseRef, newExerciseObj);
  }

    return (
    <div className="container">
      <Header />
      <header className="container-fluid bg-dark text-white pt-2 pb-2">
        <h1 className="mb-0">Exercise Submit Form</h1>
      </header>
      <FormSubmit
        addExercise={addExercise}
      />
      <Footer />
    </div>
  );
}

export default Form;