import React from "react";
import ApiHeroes from "../../data/ApiHeroes";
import "./colector.scss";

function Colector() {
  const { apidata, loading } = ApiHeroes();

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="card-list-container">
      <div className="card-list">
        {apidata.map((hero) => (
          <div key={hero.id} className="card">
            <img
              className="colector-picture"
              src={hero.image.url}
              alt={hero.name}
            />
            <h3 className="hero-name">{hero.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Colector;
