import React, { useState } from 'react'; //import React Component

export default function ExerciseSelectForm(props) {

  //Your work goes here
  const [selectedBodyPart, setSelectedBodyPart] = useState('');

  const handleBodyPartChange = (event) => {
    setSelectedBodyPart(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission with body part selected
    props.applyFilterCallback(selectedBodyPart);
  }

  const optionElems = props.bodyPartOptions.map((bodyPart) => {
    return <option key={bodyPart} value={bodyPart}>{bodyPart}</option>
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <select id="bodyPartSelect" className="form-select" value={selectedBodyPart} onChange={handleBodyPartChange}>
            <option value="">Show all exercise</option>
            {optionElems}
          </select>
        </div>
        <div className="col-auto">
          <button id="submitButton" type="submit" className="btn btn-warning">Apply Filter</button>
        </div>
      </div>
    </form>
  );
}