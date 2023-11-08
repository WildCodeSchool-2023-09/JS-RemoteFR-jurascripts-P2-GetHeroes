import PropTypes from "prop-types";

function Win({ clickRestart }) {
  return (
    <>
      <img src="" alt="api_picture" />
      <button type="button" onClick={clickRestart}>
        Continuer
      </button>
    </>
  );
}
Win.propTypes = {
  clickRestart: PropTypes.func.isRequired,
};
export default Win;
