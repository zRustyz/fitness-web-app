import React, { useState } from 'react';
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

function App(props) {
  const [equipmentFilter, setEquipmentFilter] = useState('');
  const [includeArms, setIncludeArms] = useState(false);
  const [includeLegs, setIncludeLegs] = useState(false);
  const [includeChest, setIncludeChest] = useState(false);
  const [includeShoulder, setIncludeShoulder] = useState(false);
  const [includeBack, setIncludeBack] = useState(false);

  //get sorted list of unique equipment. reduce array of objects into array of strings,
  //convert to Set to get uniques, spread back into array, and sort
  const uniqueExercise = [...new Set(props.data.reduce((all, current) => {
    return all.concat([current.equipment]);
  }, []))].sort();

  // Filter the data prop based on equipments and body part checkbox
  let displayedData = props.data;
  if (equipmentFilter !== '' || includeArms || includeLegs || includeChest || includeShoulder || includeBack) {
    displayedData = displayedData.filter((data) => {
      if (data.equipment === equipmentFilter) {
        return true;
      }
      if (includeArms && data.body_part === 'Arms') {
        return true;
      }
      if (includeLegs && data.body_part === 'Legs') {
        return true;
      }
      if (includeChest && data.body_part === 'Chest') {
        return true;
      }
      if (includeShoulder && data.body_part === 'Shoulder') {
        return true;
      }
      if (includeBack && data.body_part === 'Back') {
        return true;
      }
      return false;
    });
  }

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
      <p>Please select the type of equipment and body part to filter the approriate exercise for you.</p>
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

  //comment out above statement and uncomment below statment for individual excercise page
  // return (
  //   <div className='container'>
  //   <RenderHeader/>
  //   <RenderContent/>
  //   </div>
  // )

}


export default App;
