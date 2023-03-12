import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

export function Equipment (props){

  return (
      <div>
        {/* This is the box for equipment checkbox group */}
        <FontAwesomeIcon icon={faWeightHanging} className="hover:text-red-500"></FontAwesomeIcon>
        <div className="row" id="equipment-section">
          <div className="col-md-6">
            <p>Equipment</p>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="barbell" />
              <label className="form-check-label" htmlFor="barbell">Barbell</label>
            </div>
            <div className="form-check">
              <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
              <input className="form-check-input" type="checkbox" id="dumbell" />
              <label className="form-check-label" htmlFor="dumbell">Dumbell</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="cable-machine" />
              <label className="form-check-label" htmlFor="cable-machine">Cable Machine</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="misc" />
              <label className="form-check-label" htmlFor="misc">Misc</label>
            </div>
          </div>
        </div>
      </div>
  )
}