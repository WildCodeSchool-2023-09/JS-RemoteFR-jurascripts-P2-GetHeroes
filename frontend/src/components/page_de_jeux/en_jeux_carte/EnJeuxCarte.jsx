import ReveltCard from "../../../assets/images/ReveltCard.png";
import Hero from "../../../assets/images/test.jpg";
import ScratchCard from "../../../util/ScratchCard";
import "./enjeuxcarte.scss";

function EnJeuxCarte() {
  return (
    <section className="contenairScratcard">
      <ScratchCard width={224} height={288} image={ReveltCard} brushSize={5} />

      <img src={Hero} alt="hero" />
    </section>
  );
}
export default EnJeuxCarte;
