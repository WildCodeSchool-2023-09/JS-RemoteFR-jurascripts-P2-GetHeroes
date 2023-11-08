import PropTypes from "prop-types";
import pow from "../../../assets/pictures/pow.png";
import "./lose.scss";

function Lose({ clickRecomancer }) {
  return (
    <>
      <img className="pow" src={pow} alt="pow" />
      <p className="loseP">Vous n'avez pas réussi à trouver le bon héro !!</p>
      <button className="boutonP" type="button" onClick={clickRecomancer}>
        Recommencer
      </button>
    </>
  );
}
Lose.propTypes = {
  clickRecomancer: PropTypes.func.isRequired,
};
export default Lose;
