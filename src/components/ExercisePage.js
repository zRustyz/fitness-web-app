import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { SuggestionSubmit } from './SuggestionSubmit';
import { Header } from '../Header';
import { Footer } from '../Footer';

function RenderExcercisePage(props) {
  const { exerciseName } = useParams();
  
  // handle exercise object array
  const [exerciseObjArray, setExerciseObjArray] = useState([]);

  // effect to run when the component first loads
  useEffect(() => {

    //hook up a listener to Firebase
    const db = getDatabase();
    const allExercises = ref(db, "allExercises");

    //fetch exercise data from firebase
    onValue(allExercises, function(snapshot) {
      const allExerciseObj = snapshot.val();
      const objKeys = Object.keys(allExerciseObj);
      const objArray = objKeys.map((keyString) => {
        allExerciseObj[keyString].key = keyString;
        return allExerciseObj[keyString];
      })
      setExerciseObjArray(objArray); //update state & rerender
    });

  }, []) //array is list of variables that will cause this to rerun if changed

  const data = exerciseObjArray.find(obj => obj.exerciseName === exerciseName);
  const comment = data?.comments || "";
  const suggestion = data?.suggestions || "";

  const commentArray = comment.split(" - ");
  
  const addSuggestion = (name, newSuggestion) => {
    const newSuggestionObj = {
      "userName": name,
      "suggestion": newSuggestion
    }

    const db = getDatabase();
    const allExercisesRef = ref(db, 'allExercises');
    push(ref(allExercisesRef, data.key, 'userSuggestion'), newSuggestionObj);
  }

  return (
    <div>
      <Header />
      <header className="container-fluid bg-dark text-white pt-4 pb-5">
        <h1 className="pt-5">{data?.exerciseName}</h1>
      </header>
      <main>
        <div className="container">
          <div className="card my-3">
            <div className="card-body">
              <img src={data?.imgSrc} alt={data?.imgAlt} class="img-fluid rounded mb-3" />
              <h2> Instructions:</h2>
              <p>{data?.instructions}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>Tips & Suggestions</h2>
              <div>
                {commentArray.map((item, index) => (
                  <p key={index}>
                    {" - "}
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <SuggestionSubmit addSuggestion={addSuggestion} />
      </main>
      <Footer />
    </div>
  );
}

export default RenderExcercisePage;