import React, { useState } from 'react';

export default function ExerciseSelectForm(props) {
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [includeArms, setIncludeArms] = useState(false);
  const [includeLegs, setIncludeLegs] = useState(false);
  const [includeChest, setIncludeChest] = useState(false);
  const [includeShoulder, setIncludeShoulder] = useState(false);
  const [includeBack, setIncludeBack] = useState(false);

  const handleEquipmentChange = (event) => {
    setSelectedEquipment(event.target.value);
  }

  const handleArmsChange = (event) => {
    setIncludeArms(event.target.checked);
  }

  const handleLegsChange = (event) => {
    setIncludeLegs(event.target.checked);
  }

  const handleChestChange = (event) => {
    setIncludeChest(event.target.checked);
  }

  const handleShoulderChange = (event) => {
    setIncludeShoulder(event.target.checked);
  }

  const handleBackChange = (event) => {
    setIncludeBack(event.target.checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.applyFilterCallback(selectedEquipment, includeArms, includeLegs, includeChest, includeShoulder, includeBack);
  }

  const optionElems = props.equipmentOptions.map((equipment) => {
    return <option key={equipment} value={equipment}>{equipment}</option>
  })

  return (
    <form onSubmit={handleSubmit}>
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <select id="equipmentSelect" className="form-select" value={selectedEquipment} onChange={handleEquipmentChange}>
            <option value="">Show all equipments</option>
            {optionElems}
          </select>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="armsCheckbox" type="checkbox" className="form-check-input" checked={includeArms} onChange={handleArmsChange} />
            <label htmlFor="armsCheckbox" className="form-check-label">Arms</label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="legsCheckbox" type="checkbox" className="form-check-input" checked={includeLegs} onChange={handleLegsChange} />
            <label htmlFor="legsCheckbox" className="form-check-label">Legs</label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="chestCheckbox" type="checkbox" className="form-check-input" checked={includeChest} onChange={handleChestChange} />
            <label htmlFor="chestCheckbox" className="form-check-label">Chest</label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="shoulderCheckbox" type="checkbox" className="form-check-input" checked={includeShoulder} onChange={handleShoulderChange} />
            <label htmlFor="shoulderCheckbox" className="form-check-label">Shoulder</label>
          </div>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input id="backCheckbox" type="checkbox" className="form-check-input" checked={includeBack} onChange={handleBackChange} />
            <label htmlFor="backCheckbox" className="form-check-label">Back</label>
          </div>
        </div>
        <div className="col-auto">
          <button id="submitButton" type="submit" className="btn btn-warning">Apply Filter</button>
        </div>
      </div>
    </form>
  );
}
