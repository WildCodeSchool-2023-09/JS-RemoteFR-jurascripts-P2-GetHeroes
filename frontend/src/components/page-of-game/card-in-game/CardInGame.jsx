import { useState } from "react";
import ReveltCard from "../../../assets/pictures/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import "./cardingame.scss";
import Lose from "../lose/Lose";
import Solution from "../solution/Solution";
import Reward from "../../../pages/reward/Reward";

function CardInGame() {
  // Utilisez le hook ApiHeroes pour récupérer les données des héros
  const { apidata, loading } = ApiHeroes();
  const [gameState, setGameState] = useState("game");
  const clickRestart = () => {
    setGameState("game");
  };
  // Gérez les états de chargement et d'erreur
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  const rendomiserApi = Rendomiser(apidata).slice(0, 1);

  if (gameState === "game") {
    return (
      <section className="games-card-container">
        <section className="contenairScratcard">
          <ScratchCard
            width={224}
            height={288}
            image={ReveltCard}
            brushSize={5}
          />
          {rendomiserApi.map((hero, index) => (
            <div key={index.id}>
              <img src={hero.image.url} alt={hero.name} />
            </div>
          ))}
        </section>
        <section className="contenairSolution">
          <Solution rendomiserApi={rendomiserApi} setGameState={setGameState} />
        </section>
      </section>
    );
  }
  if (gameState === "win") {
    return (
      <section className="win">
        <Reward clickRestart={clickRestart} rendomiserApi={rendomiserApi} />
      </section>
    );
  }
  if (gameState === "lose") {
    return (
      <section className="lose">
        <Lose clickRestart={clickRestart} />
      </section>
    );
  }
}

export default CardInGame;
