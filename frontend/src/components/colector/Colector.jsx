import React, { useEffect, useState } from "react";
import ApiHeroes from "../../data/ApiHeroes";
import "./colector.scss";
import CardColector from "./CardColector";
import NotFoundCard from "./NotFoundCard";
import PagesSong from "../../util/PagesSong";
import BuySong from "../../util/BuySong";

function Colector() {
  const { apidata, loading } = ApiHeroes();
  const token = localStorage.getItem("token");

  const chunkSize = 40;
  const heroesId = localStorage.getItem("heroesId");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chunkedData, setChunkedData] = useState([]);

  useEffect(() => {
    const newData = [];
    for (let i = 0; i < apidata.length; i += chunkSize) {
      newData.push(apidata.slice(i, i + chunkSize));
    }
    setChunkedData(newData);
  }, [apidata]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  const totalPages = chunkedData.length;

  const nextSlide = () => {
    document.getElementById("card-list-container").scrollTop = 0;
    setCurrentSlide((prevSlide) =>
      prevSlide < chunkedData.length - 1 ? prevSlide + 1 : prevSlide
    );
    PagesSong();
  };

  const previousSlide = () => {
    document.getElementById("card-list-container").scrollTop = 0;
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : prevSlide));
    PagesSong();
  };

  const isFoundHero = (hero) => {
    if (JSON.parse(heroesId) === null) {
      return JSON.parse(heroesId);
    }
    return JSON.parse(heroesId).includes(hero.id);
  };

  const handleBuy = (hero) => {
    const price = 2000;
    if (token >= price) {
      const heroes = JSON.parse(heroesId) || [];
      localStorage.setItem("heroesId", JSON.stringify([...heroes, hero.id]));
      localStorage.setItem("token", token - price);
      BuySong();
    } else {
      // eslint-disable-next-line no-alert
      alert("Vous n'avez pas assez de tokens pour acheter cette carte");
    }
  };

  return (
    <div className="card-list-container" id="card-list-container">
      <div className="card-list">
        {chunkedData[currentSlide] &&
          chunkedData[currentSlide].map((hero) => {
            return isFoundHero(hero) ? (
              <CardColector key={hero.id} hero={hero} />
            ) : (
              <NotFoundCard handleBuy={handleBuy} hero={hero} />
            );
          })}
      </div>
      <div className="slider-navigation">
        <button
          type="button"
          onClick={previousSlide}
          disabled={currentSlide === 0}
        >
          ←
        </button>
        <div className="page-indicator">{`Page ${
          currentSlide + 1
        }/${totalPages}`}</div>
        <button
          type="button"
          onClick={nextSlide}
          disabled={currentSlide === chunkedData.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Colector;
