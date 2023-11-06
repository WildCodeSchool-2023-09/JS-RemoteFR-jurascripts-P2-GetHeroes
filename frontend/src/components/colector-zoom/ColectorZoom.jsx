import ApiHeroes from "../../data/ApiHeroes";
import "./colectorzoom.scss";
import SVG from "../../assets/images/delete.svg";

function ColectorZoom() {
  const apiHero = ApiHeroes();

  return (
    <section className="zoom-carte">
      <img className="return-zoom" src={SVG} alt="Play" />
      <p className="number-carte">237/481</p>
      <img
        className="img-hero-zoom"
        src={apiHero[236]?.image.url}
        alt={apiHero[236]?.name}
        height="294"
        width="230"
      />
      <p className="height-zoom desc">{apiHero[236]?.appearance.height[1]}</p>
      <p className="weight-zoom desc">
        {apiHero[236]?.appearance.weight[1] === "0 kg"
          ? "--- kg"
          : apiHero[236]?.appearance.weight[1]}
      </p>
      <h3 className="big-name-zoom">{apiHero[236]?.name}</h3>
      <p className="name-zoom">
        Mon nom est {apiHero[236]?.name}
        {apiHero[236]?.biography.aliases[0] === "-"
          ? "."
          : `alias ${apiHero[236]?.biography.aliases[0]}.`}
      </p>
      <p className="full-name-zoom">
        Je suis {apiHero[236]?.biography["full-name"]}.
      </p>
      <p className="race-zoom">
        Je suis un {apiHero[236]?.appearance.race}
        {apiHero[236]?.biography["place-of-birth"] === "-"
          ? "."
          : `né à ${apiHero[236]?.biography["place-of-birth"]}.`}
      </p>
      <p className="publisher-zoom">
        Mon éditeur est {apiHero[236]?.biography.publisher}.
      </p>
    </section>
  );
}

export default ColectorZoom;
