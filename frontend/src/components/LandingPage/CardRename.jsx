import * as React from "react";

// Image
import image1 from "../../assets/images/LandingPage/15.jpg";

export default function CardRename({ helpData }) {
  return (
    <div className="card card-compact md:h-fit w-full md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image1} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{helpData.title}</h2>
      </div>
    </div>
  );
}
