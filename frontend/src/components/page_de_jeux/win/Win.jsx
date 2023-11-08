import PropTypes from "prop-types";

function Win({ clickRecomancer }) {
  return (
    <>
      <img src="" alt="apiImage" />
      <button type="button" onClick={clickRecomancer}>
        Continuer
      </button>
    </>
  );
}
Win.propTypes = {
  clickRecomancer: PropTypes.func.isRequired,
};
export default Win;
