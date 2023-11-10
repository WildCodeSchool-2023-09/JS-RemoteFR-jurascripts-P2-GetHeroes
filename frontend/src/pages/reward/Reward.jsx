import PropTypes from "prop-types";
import "./reward.scss";

function Reward({ rendomiserApi, clickRestart }) {
  return (
    <section>
      <div className="zoom-reward">
        <img
          className="img-hero-reward"
          src={rendomiserApi.image.url}
          alt={rendomiserApi.name}
          height="294"
          width="230"
        />
        <p className="height-reward desc">
          {rendomiserApi.appearance.height[1]}
        </p>
        <p className="weight-reward desc">
          {rendomiserApi.appearance.weight[1] === "0 kg"
            ? "--- kg"
            : rendomiserApi.appearance.weight[1]}
        </p>
        <h3 className="big-name-reward">{rendomiserApi.name}</h3>
        <p className="name-reward">
          Mon nom est {rendomiserApi.name}
          {rendomiserApi.biography.aliases[0] === "-"
            ? "."
            : `alias ${rendomiserApi.biography.aliases[0]}.`}
        </p>
        <p className="full-name-reward">
          Je suis {rendomiserApi.biography["full-name"]}.
        </p>
        <p className="race-reward">
          Je suis un {rendomiserApi.appearance.race}
          {rendomiserApi.biography["place-of-birth"] === "-"
            ? "."
            : ` né à ${rendomiserApi.biography["place-of-birth"]}.`}
        </p>
        <p className="publisher-reward">
          Mon éditeur est {rendomiserApi.biography.publisher}.
        </p>
      </div>
      <button className="reward-restart" type="button" onClick={clickRestart}>
        Recommencer
      </button>
    </section>
  );
}
Reward.propTypes = {
  rendomiserApi: PropTypes.shape({
    name: PropTypes.string.isRequired,

    biography: PropTypes.shape({
      publisher: PropTypes.string.isRequired,
      aliases: PropTypes.string.isRequired,
      "place-of-birth": PropTypes.string.isRequired,
      "full-name": PropTypes.string.isRequired,
    }).isRequired,
    appearance: PropTypes.shape({
      race: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  clickRestart: PropTypes.func.isRequired,
};

export default Reward;
