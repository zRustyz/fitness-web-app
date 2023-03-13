import React from "react";
import { useState } from 'react';

export function SuggestionSubmit(props) {
  const [Name, setName] = useState('');
  const [Suggestion, setSuggestion] = useState('');

  const handleNameChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setName(value); 
  };

  // Handle equipment change so when the user clicks on the button, 
  // it will be converted to the corresponding text
  const handleSuggestionChange = (event) => {
    const value = event.target.value;
    console.log(value);
      setSuggestion(value); 
  };

  // Handle submit button
  const handleSubmit = (event) => {
    event.preventDefault();

    props.addSuggestion(Name, Suggestion);
  
    // reset the form
    setName('');
    setSuggestion('');
  };
  
  return(
    <div className="container">
    <div className="card my-3">
    <div className="card-body">
      <h2>Submit a tip or suggestion!</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nameInput">Name</label>
          <input type="name" class="form-control" id="nameInput" placeholder="Write your name here" onChange={handleNameChange}></input>
        </div>
        <div class="form-group my-4">
          <label for="suggestionInput">Tips or Suggestions</label>
          <textarea class="form-control" id="suggestionInput" rows="3" placeholder="Leave a tip or suggestion!" onChange={handleSuggestionChange}></textarea>
        </div>
      </form>
      <div class="btn-group mr-2" role="group" aria-label="Submit">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </div>
      </div>
      </div>
      </div>
  );
}
