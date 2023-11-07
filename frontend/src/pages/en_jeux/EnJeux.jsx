import EnJeuxCarte from "../../components/page_de_jeux/en_jeux_carte/EnJeuxCarte";

import "./enjeux.scss";

function EnJeux() {
  return (
    <section className="contenairPageJeux">
      <section className="contenairCarteJeux">
        <EnJeuxCarte />
      </section>
    </section>
  );
}

export default EnJeux;
