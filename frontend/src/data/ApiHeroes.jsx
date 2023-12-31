import { useState, useEffect } from "react";

function ApiHeroes() {
  const [apidata, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.superheroapi.com/api.php/${
        import.meta.env.VITE_API_KEY
      }/search/a`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApiData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apidata]);

  return { apidata, loading, error };
}

export default ApiHeroes;
