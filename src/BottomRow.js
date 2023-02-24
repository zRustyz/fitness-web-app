import React from "react";

const cardsData = [
  {
    imgSrc: "https://i0.wp.com/www.rawbarrel.com/wp-content/uploads/2018/06/biceps-curl-anatomy.jpg?fit=724%2C380&ssl=1",
    imgAlt: "Bicep Curl",
    imgSrcLink: "https://www.rawbarrel.com/a-guide-for-maximum-arms-development/",
    imgSrcSite: "Raw Barbell",
    exerciseName: "The Bicep Curl",
    link: "/card-template.html"
  },
  {
    imgSrc: "https://fitnessvolt.com/wp-content/uploads/2019/01/Lunges.jpg",
    imgAlt: "Lunge workout",
    imgSrcLink: "https://fitnessvolt.com/lunges/",
    imgSrcSite: "Fitness Volt",
    exerciseName: "The Lunges",
    link: "/card-template.html"
  },
  {
    imgSrc: "https://www.healthypostnatalbody.com/wp-content/uploads/2019/10/crunch-muscles-300x168.png",
    imgAlt: "abdominal crucnch",
    imgSrcLink: "https://www.healthypostnatalbody.com/blog/are-crunches-safe-to-do-post-natal-or-not/",
    imgSrcSite: "Healthy Body",
    exerciseName: "The Abdominal Crunch",
    link: "/card-template.html"
  }
];

export function BottomRow(props) {
  return (
    <div className="bottomrow">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={card.imgAlt} />
          <p>
            Image Source:{" "}
            <a href={card.imgSrcLink}>{card.imgSrcSite}</a>
          </p>
          <p>{card.exerciseName}</p>
          <a href={card.link} className="btn btn-primary">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
