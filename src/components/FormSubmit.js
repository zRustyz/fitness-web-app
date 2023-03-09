import { useState } from 'react';

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // call the callback function with the form data
    props.addExercise(exerciseName, imgSrc, imgAlt, imgSrcLink, imgSrcSite, link, bodyPart, equipment, instructions, comments);

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
      <header className="bg-dark text-light py-3">
          <div className="container">
              <h3 className="mb-0">Exercise Submit Form</h3>
          </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Please enter the information below to submit new exercise to the database:</label>
        </div>
        <div className="form-group mb-3 mt-3">
          <label>Exercise Name:</label>
          <input type="text" placeholder="e.g., The Abdominal Crunch" className="form-control" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Body Part:</label>
          <input type="text" placeholder="Type one of these: Chest, Legs, Arms, Shoulder, or Back" className="form-control" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Equipment:</label>
          <input type="text" placeholder="Type one of these: Misc, Dumbell, Barbell, or Cable Machine" className="form-control" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
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