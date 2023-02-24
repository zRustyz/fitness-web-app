import React from "react";

const cardsData = [
  {
    imgSrc: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-bench-press-benefits-1024x576.jpg",
    imgAlt: "A man lifts the barbell",
    imgSrcLink: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/barbell-bench-press-benefits-1024x576.jpg",
    imgSrcSite: "Inspire USA Foundation",
    exerciseName: "The Bench Press",
    link: "/card-template.html"
  },
  {
    imgSrc: "https://s3.amazonaws.com/prod.skimble/assets/1871464/image_iphone.jpg",
    imgAlt: "Seated Row",
    imgSrcLink: "https://s3.amazonaws.com/prod.skimble/assets/1871464/image_iphone.jpg",
    imgSrcSite: "Skimble",
    exerciseName: "The Seated Row",
    link: "/card-template.html"
  },
  {
    imgSrc: "http://weighttraining.guide/wp-content/uploads/2016/05/dumbbell-lateral-raise-resized.png",
    imgAlt: "Lateral Raise",
    imgSrcLink: "https://weighttraining.guide/exercises/lateral-raise/",
    imgSrcSite: "Weight Training",
    exerciseName: "The Lateral Raise",
    link: "/card-template.html"
  }
];

export function TopRow(props) {
  return (
    <div className="toprow">
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
