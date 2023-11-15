import { useParams, Link } from "react-router-dom";

import ApiHeroes from "../../data/ApiHeroes";
import "./colectorzoom.scss";
import SVG from "../../assets/pictures/delete.svg";

function ColectorZoom() {
  const { apidata, loading } = ApiHeroes();
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  const { id } = useParams();
  const hero = apidata.filter((heros) => heros.id === id);
  const heroIndex = apidata.findIndex((item) => item.id === id);

  return (
    <section className="zoom-card">
      <Link to="/colector">
        <img className="return-zoom" src={SVG} alt="Play" />
      </Link>
      <p className="number-card">
        {heroIndex}/{apidata.length}
      </p>
      <img
        className="img-hero-zoom"
        src={hero[0].image.url}
        alt={hero[0].name}
        height="294"
        width="230"
      />

      <p className="height-zoom desc">{hero[0].appearance.height[1]}</p>
      <p className="weight-zoom desc">
        {hero[0].appearance.weight[1] === "0 kg"
          ? "--- kg"
          : hero[0].appearance.weight[1]}
      </p>
      <h3 className="big-name-zoom">{hero[0].name}</h3>
      <p className="name-zoom">
        Mon nom est {hero[0].name}
        {hero[0].biography.aliases[0] === "-"
          ? "."
          : `alias ${hero[0].biography.aliases[0]}.`}
      </p>
      <p className="full-name-zoom">
        Je suis {hero[0].biography["full-name"]}.
      </p>
      <p className="race-zoom">
        Je suis un {hero[0].appearance.race}
        {hero[0].biography["place-of-birth"] === "-"
          ? "."
          : `né à ${hero[0].biography["place-of-birth"]}.`}
      </p>
      <p className="publisher-zoom">
        Mon éditeur est {hero[0].biography.publisher}.
      </p>
    </section>
  );
}

export default ColectorZoom;
