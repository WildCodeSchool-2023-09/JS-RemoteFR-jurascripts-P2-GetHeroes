import { useState, useEffect } from "react";

function ApiHeroes() {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    fetch("https://www.superheroapi.com/api.php/24816519924613529/search/a")
      .then((response) => response.json())
      .then((data) => setApiData(data.results));
  }, []);

  return apidata;
}

export default ApiHeroes;
