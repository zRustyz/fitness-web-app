import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom'; 

export function FormSubmit(props) {
  const [exerciseName, setExerciseName] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [imgAlt, setImgAlt] = useState('');
  const [imgSrcLink, setImgSrcLink] = useState('');
  const [imgSrcSite, setImgSrcSite] = useState('');
  const [link, setLink] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [equipment, setEquipment] = useState('');
  const [instructions, setInstructions] = useState('');
  const [comments, setComments] = useState('');

  // Handle body part change so when the user clicks on the button, 
  // it will be converted to the corresponding text
  const handleBodyPartChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setBodyPart(value); 
  };

  // Handle equipment change so when the user clicks on the button, 
  // it will be converted to the corresponding text
  const handleEquipmentChange = (event) => {
    const value = event.target.value;
      setEquipment(value); 
  };

  // Handle submit button
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Set default value if there is an empty string in the field
    let imgSrcFixed = imgSrc;
    let imgAltFixed = imgAlt;
    let exerciseNameFixed = exerciseName;
    let imgSrcLinkFixed = imgSrcLink;
    let imgSrcSiteFixed = imgSrcSite;
    let bodyPartFixed = bodyPart;
    let equipmentFixed = equipment;
    let linkFixed = link;
  
    if(imgSrc === ''){
      imgSrcFixed = 'https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg';
      imgAltFixed = 'No available image';
    }
    if(exerciseName === ''){
      exerciseNameFixed = 'No exercise name available';
    }
    if(imgSrcLink === ''){
      imgSrcLinkFixed = 'No link available';
    }
    if(imgSrcSite === ''){
      imgSrcSiteFixed = 'Dreamstime';
    }
    if(bodyPart === ''){
      bodyPartFixed = 'Chest';
    }
    if(equipment === ''){
      equipmentFixed = 'Misc';
    }
    if(link === ''){
      linkFixed = '/card-template.html';
    }
  
    // call the callback function with the form data
    props.addExercise(exerciseNameFixed, imgSrcFixed, imgAltFixed, imgSrcLinkFixed, imgSrcSiteFixed, link, bodyPartFixed, equipmentFixed, instructions, comments);
  
    // reset the form
    setExerciseName('');
    setImgSrc('');
    setImgAlt('');
    setImgSrcLink('');
    setImgSrcSite('');
    setLink('');
    setBodyPart('');
    setEquipment('');
    setInstructions('');
    setComments('');
  };  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mt-3">Please enter the information below to submit new exercise to the database:</label>
        </div>

        <div className="form-group mb-3 mt-3">
          <label>Exercise Name:</label>
          <input type="text" placeholder="e.g., The Abdominal Crunch" className="form-control" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
        </div>

        <div className="form-group mb-3">
          <label>Body Part:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="bodyPartRadio" id="chestRadio" value="Chest" defaultChecked onChange={handleBodyPartChange} />
            <label className="form-check-label" htmlFor="chestRadio">
              Chest
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="bodyPartRadio" id="legsRadio" value="Legs" onChange={handleBodyPartChange} />
            <label className="form-check-label" htmlFor="legsRadio">
              Legs
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="bodyPartRadio" id="armsRadio" value="Arms" onChange={handleBodyPartChange} />
            <label className="form-check-label" htmlFor="armsRadio">
              Arms
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="bodyPartRadio" id="shoulderRadio" value="Shoulder" onChange={handleBodyPartChange} />
            <label className="form-check-label" htmlFor="shoulderRadio">
              Shoulder
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="bodyPartRadio" id="backRadio" value="Back" onChange={handleBodyPartChange} />
            <label className="form-check-label" htmlFor="backRadio">
              Back
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label>Equipment:</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="equipmentRadio" id="barbellRadio" value="Barbell" onChange={handleEquipmentChange} />
            <label className="form-check-label" htmlFor="barbellRadio">
              Barbell
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="equipmentRadio" id="dumbellRadio" value="Dumbell" onChange={handleEquipmentChange} />
            <label className="form-check-label" htmlFor="dumbellRadio">
              Dumbell
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="equipmentRadio" id="cableMachineRadio" value="Cable Machine" onChange={handleEquipmentChange} />
            <label className="form-check-label" htmlFor="cableMachineRadio">
              Cable Machine
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="equipmentRadio" id="miscRadio" value="Misc" defaultChecked onChange={handleEquipmentChange} />
            <label className="form-check-label" htmlFor="miscRadio">
              Misc
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label>Name of the Web Source:</label>
          <input type="text" placeholder="e.g., Fitness Volt" className="form-control" value={imgSrcSite} onChange={(e) => setImgSrcSite(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Link to the Web Source:</label>
          <input type="text" placeholder="e.g., https://fitnessvolt.com/lunges/" className="form-control" value={imgSrcLink} onChange={(e) => setImgSrcLink(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Link to the Image Source:</label>
          <input type="text" placeholder="e.g., https://www.fitnessvolt.com/wp-content/uploads/2019/01/Lunges.jpg" className="form-control" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Image Alt:</label>
          <input type="text" placeholder="e.g., The Lunges being performed" className="form-control" value={imgAlt} onChange={(e) => setImgAlt(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Link to Read More:</label>
          <input type="text" placeholder="e.g., /card-template.html" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Instructions:</label>
          <input type="text" placeholder="e.g., To perform the lunges, grip the dumbbells with your hands." className="form-control" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Comments:</label>
          <textarea placeholder="Seperate each comment using -. For example: Keep your body upright through the movement. - Keep your core engaged throughout the entire lunge." 
          className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} rows="5"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </div>
  );
}