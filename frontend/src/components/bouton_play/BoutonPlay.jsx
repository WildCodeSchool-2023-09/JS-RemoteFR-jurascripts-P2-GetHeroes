import PropTypes from "prop-types";
import "./boutonPlay.scss";
import imgPlay from "../../assets/images/Play_game.svg";

function BoutonPlay({ playAfficher }) {
  return (
    <section className="btnPlay">
      <img
        className={playAfficher ? "actif" : "noActif"}
        src={imgPlay}
        alt="Play"
      />
    </section>
  );
}

BoutonPlay.propTypes = {
  playAfficher: PropTypes.bool.isRequired,
};

export default BoutonPlay;
