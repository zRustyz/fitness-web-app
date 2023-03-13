import React, { useEffect, useState } from 'react';
import { Link, link, useParams } from 'react-router-dom';
import EXERCISES_INFO from '../data/exercise-page-info.json';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { SuggestionSubmit } from './SuggestionSubmit';

function RenderExcercisePage(props) {
  const param = useParams().exerciseName;
  const exercise = EXERCISES_INFO[param];
  const [comments, updateComments] = useState(exercise.comments);

   // hook up a listener to Firebase
   const db = getDatabase();

   // handle exercise object array
   const [suggestionObjArray, setSuggestionsObjArray] = useState();
 
   // effect to run when the component first loads
   useEffect(() => {
 
     //hook up a listener to Firebase
     const db = getDatabase();
     const allSuggestions = ref(db, "allSuggestions");

 
   }, []) //array is list of variables that will cause this to rerun if changed
 
  const addSuggestion = (Name, Suggestion) => {
    const newSuggestionsObj = {
      "name": Name,
      "suggestion": Suggestion
    }

    const db = getDatabase();
    const allSuggestionsRef = ref(db, "allExercises");
    push(allSuggestionsRef, newSuggestionsObj);
  }

  return(
    <div>
  <header className="container-fluid bg-dark text-white pt-4 pb-5">
    <Link to='/' className="text-decoration-none text-white h4 pt-2">Home</Link>
    <h1 className="pt-5">{exercise.name}</h1>
  </header>
  <main>
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <img src={exercise.imgSrc} alt={exercise.imgAlt} class="img-fluid rounded mb-3" />
          <h2> Instructions:</h2>
          <p>{exercise.instructions}</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h2>Tips & Suggestions</h2>
          <ul className="my-3"> {comments.map((comment) => <li>{comment}</li>)} </ul>
        </div>
      </div>
    </div>
    <SuggestionSubmit
        addSuggestion={addSuggestion}
      />
  </main>
</div>
  )
}

export default RenderExcercisePage;

