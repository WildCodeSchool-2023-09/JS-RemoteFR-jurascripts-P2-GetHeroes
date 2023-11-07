import ReveltCard from "../../../assets/images/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import Solution from "../solution/Solution";
import "./enjeuxcarte.scss";

function EnJeuxCarte() {
  // Utilisez le hook ApiHeroes pour récupérer les données des héros
  const { apidata, loading } = ApiHeroes();

  // Gérez les états de chargement et d'erreur
  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  const rendomiserApi = Rendomiser(apidata).slice(0, 1);

  return (
    <>
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
        <Solution rendomiserApi={rendomiserApi} />
      </section>
    </>
  );
}

export default EnJeuxCarte;
