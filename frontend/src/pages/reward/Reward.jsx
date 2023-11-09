import ApiHeroes from "../../data/ApiHeroes";
import "./reward.scss";

function Reward() {
  const { apidata, loading } = ApiHeroes();
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <section className="zoom-reward">
      <img
        className="img-hero-reward"
        src={apidata[236].image.url}
        alt={apidata[236].name}
        height="294"
        width="230"
      />
      <p className="height-reward desc">{apidata[236].appearance.height[1]}</p>
      <p className="weight-reward desc">
        {apidata[236].appearance.weight[1] === "0 kg"
          ? "--- kg"
          : apidata[236].appearance.weight[1]}
      </p>
      <h3 className="big-name-reward">{apidata[236].name}</h3>
      <p className="name-reward">
        Mon nom est {apidata[236].name}
        {apidata[236].biography.aliases[0] === "-"
          ? "."
          : `alias ${apidata[236].biography.aliases[0]}.`}
      </p>
      <p className="full-name-reward">
        Je suis {apidata[236].biography["full-name"]}.
      </p>
      <p className="race-reward">
        Je suis un {apidata[236].appearance.race}
        {apidata[236].biography["place-of-birth"] === "-"
          ? "."
          : `né à ${apidata[236].biography["place-of-birth"]}.`}
      </p>
      <p className="publisher-reward">
        Mon éditeur est {apidata[236].biography.publisher}.
      </p>
    </section>
  );
}

export default Reward;
