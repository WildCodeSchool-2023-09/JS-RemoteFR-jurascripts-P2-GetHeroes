import PropTypes from "prop-types";
import "./solution.scss";
import { useContext } from "react";
import TokenContext from "../../../contexts/TokenContext";
import HeroesCollect from "../../../contexts/HeroesCollect";

import ValidationTrueSong from "../../../util/ValidationTrueSong";
import ValidationFalseSong from "../../../util/ValidationFalseSong";

function Solution({ currentHero, setGameState, getToken }) {
  const { heroesCollected, setHeroesCollected } = useContext(HeroesCollect);
  const { setToken, token } = useContext(TokenContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    if (heroValider.toLowerCase() === currentHero.name.toLowerCase()) {
      ValidationTrueSong();
      setToken(token + getToken);
      setHeroesCollected([...heroesCollected, currentHero.id]);
      setGameState("win");
    } else {
      ValidationFalseSong();
      setGameState("lose");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Qui est ce héros ?"
        type="text"
        className="solutionText"
        name="valider"
      />
      <button className="button-solution" type="submit">
        Valider
      </button>
    </form>
  );
}

Solution.propTypes = {
  currentHero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  setGameState: PropTypes.func.isRequired,
  getToken: PropTypes.number.isRequired,
};

export default Solution;
