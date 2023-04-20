import React, { useState, useEffect } from "react";
import Bookticket from "./Bookticket";
import { useParams } from "react-router-dom";
import "../index.css";

const Details = ({ info }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showName, setShowName] = useState("");

  const filteredItem = () => {
    const data = info.filter((e) => e.show.id == id);
    setData(data);
    return data;
  };

  useEffect(() => {
    (async () => {
      filteredItem();
      if (data?.length) {
        console.log(data[0].show.name, "log2");
        setShowName(data[0].show.name);
      }
    })();
  }, [info]);

  console.log(data, "data");
  console.log(info, "info");
  console.log(showName, "name");

  return (
    <div>
      {data[0] && data[0].show && data[0].show.name ? (
        <div className="details">
          <div className="details-left">
            <img
              src={
                data[0].show.image?.medium ||
                "https://placehold.co/600x400?text=Movie+Name"
              }
              alt=""
            />
          </div>
          <div className="details-right">
            <h1>{data[0].show.name}</h1>
            <h3>language:{data[0].show.language}</h3>
            <h3>rating:{data[0].show.rating.average}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: data[0].show.summary }}
            ></div>

            <button
              className="details-button"
              onClick={() => setShowForm(!showForm)}
            >
              Book Ticket
            </button>
          </div>
          <>{showForm ? <Bookticket name={data[0].show.name} /> : null}</>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Details;
