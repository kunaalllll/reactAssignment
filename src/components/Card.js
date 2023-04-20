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
                  src={e.show.image?.medium || "https://placehold.co/600x400"}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{e.show.name}</h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: e.show.summary.substring(0,200) }}
                  ></div>
                    <button>
                        <Link to={`/details/${e.show.id}`}>
                        Click to know more</Link>
                        </button>
                </div>
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
