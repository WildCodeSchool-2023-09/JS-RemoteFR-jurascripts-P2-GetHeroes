import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ApiHeroes from "../../data/ApiHeroes";
import "./collection.scss";

function Collection() {
  const { apidata, loading } = ApiHeroes();
  if (loading) {
    return <div>chargement en cours...</div>;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="cardList">
      <Slider
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        {apidata.map((hero) => (
          <div key={hero.id} className="border">
            <img className="heroCard" src={hero.image.url} alt={hero.name} />
            <h2>{hero.name}</h2>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Collection;
