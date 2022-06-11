import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass, instructions }) => {
  console.log(instructions.length);
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <p className="instructions">
          {instructions.length > 50
            ? "Click Details for preparing instructions!"
            : instructions}
        </p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
