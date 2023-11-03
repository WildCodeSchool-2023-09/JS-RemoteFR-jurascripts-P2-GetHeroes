import EnJeuxCarte from "../../components/page_de_jeux/en_jeux_carte/EnJeuxCarte";
import Solution from "../../components/page_de_jeux/solution/Solution";
import "./enjeux.scss";

function EnJeux() {
  return (
    <section className="contenairPageJeux">
      <section className="contenairCarteJeux">
        <EnJeuxCarte />
      </section>
      <section className="contenairSolution">
        <Solution />
      </section>
    </section>
  );
}

export default EnJeux;
