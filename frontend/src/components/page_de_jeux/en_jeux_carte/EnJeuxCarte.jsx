import ReveltCard from "../../../assets/images/ReveltCard.png";
import ApiHeroes from "../../../data/ApiHeroes";
import Rendomiser from "../../../util/Rendomiser";
import ScratchCard from "../../../util/ScratchCard";
import "./enjeuxcarte.scss";

function EnJeuxCarte() {
  const ApiHero = ApiHeroes();
  const RendomiserApi = Rendomiser(ApiHero);
  return (
    <section className="contenairScratcard">
      <ScratchCard width={224} height={288} image={ReveltCard} brushSize={5} />

      {RendomiserApi.map((hero, index) => (
        <div key={index.id}>
          <img src={hero.image.url} alt="hero" />
        </div>
      ))}
    </section>
  );
}
export default EnJeuxCarte;
