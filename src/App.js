import React, { useState } from 'react'; //import React Component
//import { RenderHeader } from './ExcercisePage';
//import { RenderContent } from './ExcercisePage';
import{Header} from './Header.js'
import{Search} from './Search.js'
import{TopRow} from './TopRow.js';
import{Equipment}from './Equipment.js';
import{BottomRow}from './BottomRow';
import{Footer}from './Footer.js';
import CardList from './components/CardList';
import ExerciseSelectForm from './components/ExerciseSelectForm';

function App(props) {
  const [bodyPartFilter, setBodyPartFilter] = useState('');

  //get sorted list of unique body parts. reduce array of objects into array of strings,
  //convert to Set to get uniques, spread back into array, and sort
  const uniqueExercise = [...new Set(props.data.reduce((all, current) => {
    return all.concat([current.body_part]);
  }, []))].sort();

  // Filter the data prop based on the state filters
  let displayedData = props.data;
  if (bodyPartFilter !== '') {
    displayedData = displayedData.filter((data) => {
      if (data.body_part === bodyPartFilter) {
        return true;
      }
      return false;
    });
  }

  const applyFilter = (bodyPartName) => {
    setBodyPartFilter(bodyPartName);
  };

  return (
    <div className="container">
      <Header/>
      {/* <Search/> */}
      {/* <Equipment/> */}
      {/* <TopRow/> */}
      {/* <BottomRow/> */}
      <ExerciseSelectForm bodyPartOptions={uniqueExercise} applyFilterCallback={applyFilter} />
      <CardList data={displayedData} />
      <Footer/>
    </div>
  );
}


export default App;
