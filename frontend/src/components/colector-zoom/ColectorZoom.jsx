import ApiHeroes from "../../data/ApiHeroes";
import "./colectorzoom.scss";

function ColectorZoom() {
  const apiHero = ApiHeroes();
  return (
    <section className="zoom_bigcard">
      <h1>zoom collection</h1>
      <p>{apiHero[237].name} </p>
    </section>
  );
}

export default ColectorZoom;
