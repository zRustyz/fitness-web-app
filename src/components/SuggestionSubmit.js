import React, { useState } from 'react';

export function SuggestionSubmit(props) {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value); 
  };

  const handleSuggestionChange = (event) => {
    const value = event.target.value;
    setSuggestion(value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addSuggestion(name, suggestion);

    setName('');
    setSuggestion('');
  };
  
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <h2>Submit a tip or suggestion!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Write your name here" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group my-4">
              <label htmlFor="suggestionInput">Tips or Suggestions</label>
              <textarea className="form-control" id="suggestionInput" rows="3" placeholder="Leave a tip or suggestion!" value={suggestion} onChange={handleSuggestionChange} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
