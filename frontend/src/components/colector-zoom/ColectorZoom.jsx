import { Link, useParams } from "react-router-dom";
import ApiHeroes from "../../data/ApiHeroes";
import "./colectorzoom.scss";
import SVG from "../../assets/pictures/delete.svg";

function ColectorZoom() {
  const { apidata, loading } = ApiHeroes();
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  const { id } = useParams();
  const result = apidata.filter((herocard) => herocard.id === id);
  return (
    <section className="zoom-card">
      <Link to="/colector">
        <img className="return-zoom" src={SVG} alt="Play" />
      </Link>
      <p className="number-card">237/481</p>
      <img
        className="img-hero-zoom"
        src={result[0].image.url}
        alt={result[0].name}
        height="294"
        width="230"
      />
      <p className="height-zoom desc">{result[0].appearance.height[1]}</p>
      <p className="weight-zoom desc">
        {result[0].appearance.weight[1] === "0 kg"
          ? "--- kg"
          : result[0].appearance.weight[1]}
      </p>
      <h3 className="big-name-zoom">{result[0].name}</h3>
      <p className="name-zoom">
        Mon nom est {result[0].name}
        {result[0].biography.aliases[0] === "-"
          ? "."
          : `alias ${result[0].biography.aliases[0]}.`}
      </p>
      <p className="full-name-zoom">
        Je suis {result[0].biography["full-name"]}.
      </p>
      <p className="race-zoom">
        Je suis un {result[0].appearance.race}
        {result[0].biography["place-of-birth"] === "-"
          ? "."
          : `né à ${result[0].biography["place-of-birth"]}.`}
      </p>
      <p className="publisher-zoom">
        Mon éditeur est {result[0].biography.publisher}.
      </p>
    </section>
  );
}

export default ColectorZoom;
