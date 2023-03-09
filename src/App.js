import React, {useEffect, useState} from 'react';
import { Header } from './Header.js';
import { Search } from './Search.js';
import { TopRow } from './TopRow.js';
import { Equipment } from './Equipment.js';
import { BottomRow } from './BottomRow';
import { Footer } from './Footer.js';
import CardList from './components/CardList';
import ExerciseSelectForm from './components/ExerciseSelectForm';
import { RenderHeader } from './components/ExcercisePage.js';
import { RenderContent } from './components/ExcercisePage.js';
import { getDatabase, ref, set, push, onValue } from 'firebase/database'
import { FormSubmit } from './components/FormSubmit.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //import router

function App(props) {
  const [equipmentFilter, setEquipmentFilter] = useState('');
  const [includeArms, setIncludeArms] = useState(false);
  const [includeLegs, setIncludeLegs] = useState(false);
  const [includeChest, setIncludeChest] = useState(false);
  const [includeShoulder, setIncludeShoulder] = useState(false);
  const [includeBack, setIncludeBack] = useState(false);

  // hook up a listener to Firebase
  const db = getDatabase();

  // handle exercise object array
  const [exerciseObjArray, setExerciseObjArray] = useState();

  // effect to run when the component first loads
  useEffect(() => {

    //hook up a listener to Firebase
    const db = getDatabase();
    const allExercises = ref(db, "allExercises");
    
    //fetch message data from firebase
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

// Define uniqueExercise state and setter
const [uniqueExercise, setUniqueExercise] = useState([]);

useEffect(() => {
  if (exerciseObjArray && exerciseObjArray.length > 0) {
    // get sorted list of unique equipment. reduce array of objects into array of strings,
    // convert to Set to get uniques, spread back into array, and sort
    const data = exerciseObjArray.map((obj) => obj.equipment);
    const uniqueExercise = [...new Set(data)].sort();
    setUniqueExercise(uniqueExercise);
  }
}, [exerciseObjArray]);


  // Filter the data prop based on equipments and body part checkbox
const [displayedData, setDisplayedData] = useState([]);
useEffect(() => {
  if (exerciseObjArray) {
    let data = exerciseObjArray;
    if (equipmentFilter !== '' || includeArms || includeLegs || includeChest || includeShoulder || includeBack) {
      const filteredData = data.filter((item) => {
        if (item.equipment === equipmentFilter) {
          return true;
        }
        if (includeArms && item.bodyPart=== 'Arms') {
          return true;
        }
        if (includeLegs && item.bodyPart === 'Legs') {
          return true;
        }
        if (includeChest && item.bodyPart === 'Chest') {
          return true;
        }
        if (includeShoulder && item.bodyPart === 'Shoulder') {
          return true;
        }
        if (includeBack && item.bodyPart === 'Back') {
          return true;
        }
        return false;
      });
      setDisplayedData(filteredData);
    } else {
      setDisplayedData(data);
    }
  }
}, [exerciseObjArray, equipmentFilter, includeArms, includeLegs, includeChest, includeShoulder, includeBack]);

  const applyFilter = (equipmentFilter, includeArms, includeLegs, includeChest, includeShoulder, includeBack) => {
    setEquipmentFilter(equipmentFilter);
    setIncludeArms(includeArms);
    setIncludeLegs(includeLegs);
    setIncludeChest(includeChest);
    setIncludeShoulder(includeShoulder);
    setIncludeBack(includeBack);
  };

  return (
    <div className="container">
      <Header />
      {/* <Search /> */}
      {/* <Equipment /> */}
      {/* <TopRow /> */}
      {/* <BottomRow /> */}
      <p>Please select the type of equipment and body part to show the approriate exercise for you.</p>
      <ExerciseSelectForm
        equipmentOptions={uniqueExercise}
        includeArms={includeArms}
        includeLegs={includeLegs}
        includeChest={includeChest}
        includeShoulder={includeShoulder}
        includeBack={includeBack}
        applyFilterCallback={applyFilter}
      />
      <CardList data={displayedData} />
      <FormSubmit 
        addExercise={addExercise}
      />
      <Footer />
    </div>
  );

  //comment out above statement and uncomment below statment for individual excercise page
  // return (
  //   <div className='container'>
  //   <RenderHeader/>
  //   <RenderContent/>
  //   </div>
  // )

}


export default App;