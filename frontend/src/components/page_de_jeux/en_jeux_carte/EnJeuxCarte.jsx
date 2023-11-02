import ScratchCard from "reactjs-scratchcard";
import ReveltCard from "../../../assets/images/ReveltCard.png";
import Hero from "../../../assets/images/test.jpg";
import "./enjeuxcarte.scss";

function EnJeuxCarte() {
  const handleComplete = () => {
    // do some stuff here
  };
  const heightRevelt = "18.5rem";
  const widthRevelt = "14rem";
  const fadeOut = true;
  return (
    <ScratchCard
      brushSize={5}
      fadeOutOnComplete={fadeOut}
      finishPercent={76}
      height={heightRevelt}
      image={ReveltCard}
      transitionProps={{ timeout: 200 }}
      onComplete={handleComplete}
      width={widthRevelt}
    >
      <span
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Hero} alt="Hero" />
      </span>
    </ScratchCard>
  );
}
export default EnJeuxCarte;
