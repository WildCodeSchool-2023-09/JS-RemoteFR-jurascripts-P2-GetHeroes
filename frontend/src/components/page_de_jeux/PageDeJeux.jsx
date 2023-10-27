import EnJeuxCarte from "./en_jeux_carte/EnJeuxCarte";
import RevelationCarte from "./revelation_carte/RevelationCarte";
import Solution from "./solution/Solution";

function PageDeJeux() {
  return (
    <section className="contenairPageJeux">
      <section className="contenairCarteJeux">
        <EnJeuxCarte />
      </section>
      <section className="contenairRevelationCarte">
        <RevelationCarte />
      </section>
      <section className="contenairSolution">
        <Solution />
      </section>
    </section>
  );
}

export default PageDeJeux;
