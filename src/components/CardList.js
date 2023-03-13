import React from 'react';
import RenderExcercisePage from './ExercisePage';
import { Link } from 'react-router-dom';

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

  return (
    <div className="card m-2 shadow">
      <img src={data.imgSrc} alt={data.imgAlt} className="card-img-top mh-200px" style={{height: "200px", objectFit: "cover"}} />
      <div className="card-body">
        <h5 className="card-title">{data.exerciseName}</h5>
        <p className="card-text">
          Image Source:{" "}
          <a href={data.imgSrcLink}>{data.imgSrcSite}</a>
        </p>
        <Link className="btn btn-primary" to={'/' + data.exerciseName.replace(/\s+/g, '')}> Read More</Link>
      </div>
    </div>
  );
}