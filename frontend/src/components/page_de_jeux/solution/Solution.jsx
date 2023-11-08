import PropTypes from "prop-types";
import "./solution.scss";
import { useContext } from "react";
import TokenContext from "../../../contexts/TokenContext";

function Solution({ rendomiserApi, setEtatJeux }) {
  const { setToken, token } = useContext(TokenContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    if (heroValider === rendomiserApi[0].name) {
      setToken(token + 150);
      setEtatJeux("gagner");
    } else {
      setToken(token - 10);
      setEtatJeux("perdu");
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
  setEtatJeux: PropTypes.func.isRequired,
};

export default Solution;
