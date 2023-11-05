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
      <p className="weight-zoom desc">{apiHero[236]?.appearance.weight[1]}</p>
      <h3 className="big-name-zoom">{apiHero[236]?.name}</h3>
      <p className="name-zoom">
        My name is {apiHero[236]?.name} alias{" "}
        {apiHero[236]?.biography.aliases[0]}.
      </p>
      <p className="full-name-zoom">
        My full name is {apiHero[236]?.biography["full-name"]}.
      </p>
      <p className="race-zoom">
        I am a {apiHero[236]?.appearance.race} breed born in{" "}
        {apiHero[236]?.biography["place-of-birth"]}.
      </p>
      <p className="publisher-zoom">
        My publisher is {apiHero[236]?.biography.publisher}.
      </p>
    </section>
  );
}

export default ColectorZoom;
