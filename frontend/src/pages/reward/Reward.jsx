import PropTypes from "prop-types";
import "./reward.scss";
import omg from "../../assets/pictures/omg.png";
import AgainSong from "../../util/AgainSong";

function Reward({ currentHero, clickRestart, setGetToken }) {
  return (
    <section>
      <div className="zoom-reward">
        <img
          className="img-hero-reward"
          src={currentHero.image.url}
          alt={currentHero.name}
          height="294"
          width="230"
        />
        <p className="height-reward desc">{currentHero.appearance.height[1]}</p>
        <p className="weight-reward desc">
          {currentHero.appearance.weight[1] === "0 kg"
            ? "--- kg"
            : currentHero.appearance.weight[1]}
        </p>
        <h3 className="big-name-reward">{currentHero.name}</h3>
        <p className="name-reward">
          Mon nom est {currentHero.name}
          {currentHero.biography.aliases[0] === "-"
            ? "."
            : `alias ${currentHero.biography.aliases[0]}.`}
        </p>
        <p className="full-name-reward">
          Je suis {currentHero.biography["full-name"]}.
        </p>
        <p className="race-reward">
          Je suis un {currentHero.appearance.race}
          {currentHero.biography["place-of-birth"] === "-"
            ? "."
            : ` né à ${currentHero.biography["place-of-birth"]}.`}
        </p>
        <p className="publisher-reward">
          Mon éditeur est {currentHero.biography.publisher}.
        </p>
      </div>
      <button
        className="reward-restart"
        type="button"
        onClick={() => {
          clickRestart();
          setGetToken(500);
          AgainSong();
        }}
      >
        Recommencer
      </button>
      <img className="omg" src={omg} alt="omg" />
    </section>
  );
}
Reward.propTypes = {
  currentHero: PropTypes.shape({
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
  setGetToken: PropTypes.func.isRequired,
};

export default Reward;
