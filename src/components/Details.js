import React, { useState, useEffect } from "react";
import Bookticket from "./Bookticket";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      if (data?.length ) {
        console.log(data[0].show.name, 'log2')
        setShowName(data[0].show.name);
      }
    })();
  }, [info]);


 console.log(showName, 'name')

  return (
    <div>
      {data[0] ? (
        <div className="details">
          <h1>{data[0].show.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: data[0].show.summary }}></div>
          <button onClick={() => setShowForm(!showForm)}>
            Book Ticket
          </button>

          <>{showForm ? <Bookticket name={showName}/> : null}</>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Details;
