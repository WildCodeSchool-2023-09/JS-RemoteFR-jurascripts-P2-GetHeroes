import { useState } from "react";
import ReveltCard from "../../../assets/images/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import Solution from "../solution/Solution";
import "./enjeuxcarte.scss";
import Gagner from "../gagner/Gagner";
import Perdu from "../perdu/Perdu";

function EnJeuxCarte() {
  // Utilisez le hook ApiHeroes pour récupérer les données des héros
  const { apidata, loading } = ApiHeroes();
  const [etatJeux, setEtatJeux] = useState("jeux");
  const clickRecomancer = () => {
    setEtatJeux("jeux");
  };
  // Gérez les états de chargement et d'erreur
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  const rendomiserApi = Rendomiser(apidata).slice(0, 1);

  if (etatJeux === "jeux") {
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
          <Solution rendomiserApi={rendomiserApi} setEtatJeux={setEtatJeux} />
        </section>
      </section>
    );
  }
  if (etatJeux === "gagner") {
    return (
      <section className="gagner">
        <Gagner clickRecomancer={clickRecomancer} />
      </section>
    );
  }
  if (etatJeux === "perdu") {
    return (
      <section className="perdu">
        <Perdu clickRecomancer={clickRecomancer} />
      </section>
    );
  }
}

export default EnJeuxCarte;
