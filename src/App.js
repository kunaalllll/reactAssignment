import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Details from "./components/Details";
import Bookticket from "./components/Bookticket";

function App() {
  const [info, setInfo] = useState([]);

  const fetchUserData = async () => {
    try {
      let url = `https://api.tvmaze.com/search/shows?q=all`;

      let res = await fetch(url);
      let data = await res.json();

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchUserData();
    })();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Card info={info} />}>
        </Route>
        <Route path="/details/:id" element={<Details info={info} />}>
        </Route>
        <Route path="/bookticket" element={<Bookticket />}>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
