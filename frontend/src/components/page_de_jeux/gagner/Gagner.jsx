import PropTypes from "prop-types";

function Gagner({ clickRecomancer }) {
  return (
    <>
      <img src="" alt="apiImage" />
      <button type="button" onClick={clickRecomancer}>
        Continuer
      </button>
    </>
  );
}
Gagner.propTypes = {
  clickRecomancer: PropTypes.func.isRequired,
};
export default Gagner;
