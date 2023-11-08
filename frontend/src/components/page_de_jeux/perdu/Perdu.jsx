import PropTypes from "prop-types";
import pow from "../../../assets/images/pow.png";
import "./perdu.scss";

function Perdu({ clickRecomancer }) {
  return (
    <>
      <img className="pow" src={pow} alt="pow" />
      <p className="perduP">Vous n'avais pas reussi a trouvé le bon héro !!</p>
      <button className="boutonP" type="button" onClick={clickRecomancer}>
        Recomancer
      </button>
    </>
  );
}
Perdu.propTypes = {
  clickRecomancer: PropTypes.func.isRequired,
};
export default Perdu;
