import React, {useEffect, useState} from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import CardList from './CardList';
import ExerciseSelectForm from './ExerciseSelectForm';
import { getDatabase, ref, set, push, onValue } from 'firebase/database';
import { FormSubmit } from './FormSubmit';
import { Link } from 'react-router-dom'; 

function RenderHomePage(props) {
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
      <Footer />
    </div>
  );
}

export default RenderHomePage;