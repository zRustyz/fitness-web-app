import React from 'react';
import './App.css';
import { RenderHeader } from './ExcercisePage';
import { RenderContent } from './ExcercisePage';


function App() {
  return (
    <div className="App text-start">
      <RenderHeader />
      <RenderContent />
    </div>
  );
}


export default App;
