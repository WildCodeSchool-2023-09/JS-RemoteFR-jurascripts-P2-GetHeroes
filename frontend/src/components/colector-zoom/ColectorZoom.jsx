import ApiHeroes from "../../data/ApiHeroes";
import "./colectorzoom.scss";
import SVG from "../../assets/images/delete.svg";

function ColectorZoom() {
  const { apidata, loading } = ApiHeroes();
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <section className="zoom-carte">
      <img className="return-zoom" src={SVG} alt="Play" />
      <p className="number-carte">237/481</p>
      <img
        className="img-hero-zoom"
        src={apidata[236].image.url}
        alt={apidata[236].name}
        height="294"
        width="230"
      />
      <p className="height-zoom desc">{apidata[236].appearance.height[1]}</p>
      <p className="weight-zoom desc">
        {apidata[236].appearance.weight[1] === "0 kg"
          ? "--- kg"
          : apidata[236].appearance.weight[1]}
      </p>
      <h3 className="big-name-zoom">{apidata[236].name}</h3>
      <p className="name-zoom">
        Mon nom est {apidata[236].name}
        {apidata[236].biography.aliases[0] === "-"
          ? "."
          : `alias ${apidata[236].biography.aliases[0]}.`}
      </p>
      <p className="full-name-zoom">
        Je suis {apidata[236].biography["full-name"]}.
      </p>
      <p className="race-zoom">
        Je suis un {apidata[236].appearance.race}
        {apidata[236].biography["place-of-birth"] === "-"
          ? "."
          : `né à ${apidata[236].biography["place-of-birth"]}.`}
      </p>
      <p className="publisher-zoom">
        Mon éditeur est {apidata[236].biography.publisher}.
      </p>
    </section>
  );
}

export default ColectorZoom;
