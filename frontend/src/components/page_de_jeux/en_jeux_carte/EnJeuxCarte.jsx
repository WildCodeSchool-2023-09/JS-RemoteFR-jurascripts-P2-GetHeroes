import ReveltCard from "../../../assets/images/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import Solution from "../solution/Solution";
import "./enjeuxcarte.scss";

function EnJeuxCarte() {
  const apiHero = ApiHeroes();
  const rendomiserApi = Rendomiser(apiHero).slice(0, 1);

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
