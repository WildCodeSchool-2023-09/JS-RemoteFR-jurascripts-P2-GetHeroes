import PropTypes from "prop-types";
import pow from "../../../assets/pictures/pow.png";
import "./lose.scss";

function Lose({ clickRestart, setGetToken }) {
  return (
    <>
      <img className="pow" src={pow} alt="pow" />
      <p className="loseP">Vous n'avez pas réussi à trouver le bon héro !!</p>
      <button
        className="buttonP"
        type="button"
        onClick={() => {
          clickRestart();
          setGetToken(500);
        }}
      >
        Recommencer
      </button>
    </>
  );
}
Lose.propTypes = {
  clickRestart: PropTypes.func.isRequired,
  setGetToken: PropTypes.func.isRequired,
};
export default Lose;
