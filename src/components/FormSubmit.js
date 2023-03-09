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
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3 mt-3">
          <label>Exercise Name:</label>
          <input type="text" className="form-control" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Image Source:</label>
          <input type="text" className="form-control" value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Image Alt:</label>
          <input type="text" className="form-control" value={imgAlt} onChange={(e) => setImgAlt(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Image Source Link:</label>
          <input type="text" className="form-control" value={imgSrcLink} onChange={(e) => setImgSrcLink(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Image Source Site:</label>
          <input type="text" className="form-control" value={imgSrcSite} onChange={(e) => setImgSrcSite(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Link:</label>
          <input type="text" className="form-control" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Body Part:</label>
          <input type="text" className="form-control" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Equipment:</label>
          <input type="text" className="form-control" value={equipment} onChange={(e) => setEquipment(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Instructions:</label>
          <input type="text" className="form-control" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Comments:</label>
          <textarea className="form-control" value={comments} onChange={(e) => setComments(e.target.value)} rows="5"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
    </div>
  );
}