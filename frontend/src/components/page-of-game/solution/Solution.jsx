import PropTypes from "prop-types";
import "./solution.scss";
import { useContext } from "react";
import TokenContext from "../../../contexts/TokenContext";
import HeroesCollect from "../../../contexts/HeroesCollect";

function Solution({ currentHero, setGameState }) {
  const { heroesCollected, setHeroesCollected } = useContext(HeroesCollect);
  const { setToken, token } = useContext(TokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    if (heroValider.toLowerCase() === currentHero.name.toLowerCase()) {
      setToken(token + 150);
      setHeroesCollected([...heroesCollected, currentHero.id]);
      setGameState("win");
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
  currentHero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  setGameState: PropTypes.func.isRequired,
};

export default Solution;
