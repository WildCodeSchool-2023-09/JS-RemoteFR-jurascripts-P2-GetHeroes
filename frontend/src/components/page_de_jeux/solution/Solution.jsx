import PropTypes from "prop-types";
import "./solution.scss";

function Solution({ rendomiserApi }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    if (heroValider === rendomiserApi[0].name) {
      // eslint-disable-next-line no-alert
      alert("bravo");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Quel est ce héro?"
        type="text"
        className="solutionText"
        name="valider"
      />
      <button type="submit">Valider</button>
    </form>
  );
}

Solution.propTypes = {
  rendomiserApi: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Solution;
