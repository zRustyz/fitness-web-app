import React, { useState } from 'react';
import { link, useParams } from 'react-router-dom';
import EXERCISES_INFO from '../data/exercise-page-info.json';

function RenderExcercisePage(props) {
  const param = useParams().exerciseName;
  const exercise = EXERCISES_INFO[param];
  const [comments, updateComments] = useState(exercise.comments);

  return(
    <div>
      <header className="container-fluid bg-dark text-white pt-4 pb-5">
        <a href="www.google.com" className="text-decoration-none text-white h4 pt-2" >Home</a>
        <h1 className="pt-5">{exercise.name}</h1>
      </header>
      <main>
        <div className="container">
          <div className="card my-3">
            <div className="card-body">
              <img src={exercise.imgSrc}
              alt={exercise.imgAlt} class="img-fluid rounded mb-3"/>
              <h2> Instructions:</h2>
              <p>{exercise.instructions}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2>Tips & Suggestions</h2>
              <ul className="my-3">
                {comments.map((comment) => <li>{comment}</li>)}
              </ul>
              <p>Leave a suggestion here!</p>
              <input placeholder="Type here" className='me-3'/>
              <button id="submit" className='btn btn-primary'
              >Submit</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RenderExcercisePage;

