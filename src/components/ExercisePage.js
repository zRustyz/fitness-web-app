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

  const commentArray = comment.split(" - ");
  
  // handle Suggestion object array
  const [suggestionObjArray, setSuggestionObjArray] = useState([]);

  // effect to run when the component first loads
  useEffect(() => {

    //hook up a listener to Firebase
    const db = getDatabase();
    const allSuggestions = ref(db, "allSuggestions");

    //fetch exercise data from firebase
    onValue(allSuggestions, function(snapshot) {
      const allSuggestionObj = snapshot.val();
      const objKeys = Object.keys(allSuggestionObj);
      const objArray = objKeys.map((keyString) => {
        allSuggestionObj[keyString].key = keyString;
        return allSuggestionObj[keyString];
      })
      setSuggestionObjArray(objArray); //update state & rerender
    });

  }, []) //array is list of variables that will cause this to rerun if changed

  // map over the filtered array to render the suggestions
  const suggestionData = suggestionObjArray.map((obj) => ({
    key: obj.key,
    suggestion: obj.suggestion,
    userName: obj.userName,
  }));

  const addSuggestion = (name, newSuggestion) => {
    const newSuggestionObj = {
      "userName": name,
      "suggestion": newSuggestion
    }

    const db = getDatabase();
    const allSuggestions = ref(db, "allSuggestions");
    push(allSuggestions, newSuggestionObj);
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
              <img src={data?.imgSrc} alt={data?.imgAlt} className="img-fluid rounded mb-3" />
              <h2> Instructions:</h2>
              <p>{data?.instructions}</p>
            </div>
          </div>

          <div className="card my-3">
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

          <div className="card my-3">
          <div className="card-body">
            <h2>User's Suggestions</h2>
            {suggestionData.map((obj) => (
              <div key={obj.key}>
                <p>{obj.userName} {": "} {obj.suggestion}</p>
              </div>
            ))}
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