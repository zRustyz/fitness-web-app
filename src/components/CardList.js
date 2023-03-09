import React from 'react';
import RenderExcercisePage from './ExcercisePage';

export default function CardList(props) {

  let sortedData = props.data;

  const content = sortedData.map((exercise, index) => {
    return (
      <div key={index} className="col-md-4">
        <DataCard data={exercise} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
      </div>
      <div className="row">
        {content}
      </div>
    </div>
  );
}

function DataCard({ data }) {
  if(data.imgSrc === ''){
    data.imgSrc = 'https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg'
    data.imgAlt = 'No available image'
  }
  if(data.exerciseName === ''){
    data.exerciseName = 'No exercise name available'
  }
  if(data.imgSrcLink === ''){
    data.imgSrcLink = 'No link available'
  }
  if(data.imgSrcSite === ''){
    data.imgSrcSite = 'No source site available'
  }
  console.log(data)

  return (
    <div className="card m-2 shadow">
      <img src={data.imgSrc} alt={data.imgAlt} className="card-img-top mh-200px" style={{height: "200px", objectFit: "cover"}} />
      <div className="card-body">
        <h5 className="card-title">{data.exerciseName}</h5>
        <p className="card-text">
          Image Source:{" "}
          <a href={data.imgSrcLink}>{data.imgSrcSite}</a>
        </p>
        <button className="btn btn-primary" onClick={RenderExcercisePage(data.exerciseName.replace(/\s+/g, ''))}>
          Read more
        </button>
      </div>
    </div>
  );
}