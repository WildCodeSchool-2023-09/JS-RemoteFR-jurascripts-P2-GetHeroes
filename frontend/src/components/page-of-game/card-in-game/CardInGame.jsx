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
  const { apidata, loading } = ApiHeroes();
  const [gameState, setGameState] = useState("game");
  const [currentHero, setCurrentHero] = useState(null);

  const clickRestart = () => {
    setGameState("game");
    setCurrentHero(Rendomiser(apidata).slice(0, 1)[0]);
  };

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (!currentHero) {
    setCurrentHero(Rendomiser(apidata).slice(0, 1)[0]);
  }

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
          {currentHero && (
            <div>
              <img src={currentHero.image.url} alt={currentHero.name} />
            </div>
          )}
        </section>
        <section className="contenairSolution">
          <Solution currentHero={currentHero} setGameState={setGameState} />
        </section>
      </section>
    );
  }

  if (gameState === "win") {
    return (
      <section className="win">
        <Reward clickRestart={clickRestart} rendomiserApi={currentHero} />
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
