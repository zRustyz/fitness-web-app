import React, { useState } from 'react'; //import React Component
//import { RenderHeader } from './ExcercisePage';
//import { RenderContent } from './ExcercisePage';
import{Header} from './Header.js'
import{Search} from './Search.js'
import DataTable from './components/DataTable';
import ExerciseSelectForm from './components/ExerciseSelectForm';


function App(props) {
  const [bodyPartFilter, setBodyPartFilter] = useState('');

  //get sorted list of unique body parts. reduce array of objects into array of strings,
  //convert to Set to get uniques, spread back into array, and sort
  const uniqueExercise = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.body_part]);
  }, []))].sort();

  // Filter the data prop based on the state filters
  let displayedData = props.gameData;
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
      <Search/>

      <main>
        <ExerciseSelectForm bodyPartOptions={uniqueExercise} applyFilterCallback={applyFilter} />
        <DataTable data={displayedData} />
      </main>

      <footer>
      <p>© 2023 INFO Group 8</p>
      <p>
        Mark Butler, Leul Demelie, Minh Trung Le, Russell Liu, Yonas Gebeyehu
        Mekonnen
      </p>
      </footer>
    </div>
  );
}


export default App;
