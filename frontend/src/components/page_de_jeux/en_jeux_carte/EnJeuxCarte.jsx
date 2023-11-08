import { useState } from "react";
import ReveltCard from "../../../assets/images/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import Solution from "../solution/Solution";
import "./enjeuxcarte.scss";
import Win from "../win/Win";
import Lose from "../lose/Lose";

function EnJeuxCarte() {
  // Utilisez le hook ApiHeroes pour récupérer les données des héros
  const { apidata, loading } = ApiHeroes();
  const [gameState, setGameState] = useState("game");
  const clickRecomancer = () => {
    setGameState("game");
  };
  // Gérez les états de chargement et d'erreur
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  const rendomiserApi = Rendomiser(apidata).slice(0, 1);

  if (gameState === "game") {
    return (
      <section className="contenairCarteJeux">
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
          <Solution rendomiserApi={rendomiserApi} setEtatJeux={setGameState} />
        </section>
      </section>
    );
  }
  if (gameState === "win") {
    return (
      <section className="win">
        <Win clickRecomancer={clickRecomancer} />
      </section>
    );
  }
  if (gameState === "lose") {
    return (
      <section className="lose">
        <Lose clickRecomancer={clickRecomancer} />
      </section>
    );
  }
}

export default EnJeuxCarte;
