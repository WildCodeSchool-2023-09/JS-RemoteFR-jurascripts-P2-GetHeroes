import EnJeuxCarte from "../components/page_de_jeux/en_jeux_carte/EnJeuxCarte";
import RevelationCarte from "../components/page_de_jeux/revelation_carte/RevelationCarte";
import Solution from "../components/page_de_jeux/solution/Solution";

function EnJeux() {
  return (
    <section className="contenairJeux">
      <EnJeuxCarte />
      <RevelationCarte />
      <Solution />
    </section>
  );
}

export default EnJeux;
