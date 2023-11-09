import PropTypes from "prop-types";
import "./reward.scss";

function Reward({ rendomiserApi, clickRestart }) {
  return (
    <section>
      <div className="zoom-reward">
        <img
          className="img-hero-reward"
          src={rendomiserApi[0].image.url}
          alt={rendomiserApi[0].name}
          height="294"
          width="230"
        />
        <p className="height-reward desc">
          {rendomiserApi[0].appearance.height[1]}
        </p>
        <p className="weight-reward desc">
          {rendomiserApi[0].appearance.weight[1] === "0 kg"
            ? "--- kg"
            : rendomiserApi[0].appearance.weight[1]}
        </p>
        <h3 className="big-name-reward">{rendomiserApi[0].name}</h3>
        <p className="name-reward">
          Mon nom est {rendomiserApi[0].name}
          {rendomiserApi[0].biography.aliases[0] === "-"
            ? "."
            : `alias ${rendomiserApi[0].biography.aliases[0]}.`}
        </p>
        <p className="full-name-reward">
          Je suis {rendomiserApi[0].biography["full-name"]}.
        </p>
        <p className="race-reward">
          Je suis un {rendomiserApi[0].appearance.race}
          {rendomiserApi[0].biography["place-of-birth"] === "-"
            ? "."
            : ` né à ${rendomiserApi[0].biography["place-of-birth"]}.`}
        </p>
        <p className="publisher-reward">
          Mon éditeur est {rendomiserApi[0].biography.publisher}.
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
