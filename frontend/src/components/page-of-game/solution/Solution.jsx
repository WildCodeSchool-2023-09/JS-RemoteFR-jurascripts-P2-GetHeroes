import PropTypes from "prop-types";
import "./solution.scss";
import { useContext } from "react";
import TokenContext from "../../../contexts/TokenContext";
import HeroesCollect from "../../../contexts/HeroesCollect";

function Solution({ rendomiserApi, setGameState }) {
  const { heroesCollected, setHeroesCollected } = useContext(HeroesCollect);
  const { setToken, token } = useContext(TokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    if (heroValider === rendomiserApi[0].name) {
      setToken(token + 150);
      setGameState("win");
      setHeroesCollected([...heroesCollected, rendomiserApi[0].id]);
    } else {
      setToken(token - 10);
      setGameState("lose");
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
  setGameState: PropTypes.func.isRequired,
};

export default Solution;