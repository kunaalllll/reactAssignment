import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';
const Card = ({info}) => {

  return (
    <div className="card-container">
      {info ? (
        <>
          {info.map((e) => {
            return (
              <div key={e.show.id} className="card">
                <img
                  src={
                    e.show.image?.medium ||
                    "https://placehold.co/125x175?text=Movie+Name"
                  }
                  className="card-img-top"
                  alt="..."
                />
                <h1 className="card-title">
                  Name: <span className="name">{e.show.name}</span>
                </h1>
                <h3>
                  Rating:{" "}
                  <span className="rating">{e.show.rating.average}</span>
                </h3>
                <h3>
                  Premiered:
                  <span className="premiered"> {e.show.premiered}</span>
                </h3>

                <button className="card-button">
                  <Link to={`/details/${e.show.id}`}>Click to know more</Link>
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      ;
    </div>
  );
};

export default Card;
