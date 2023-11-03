import "./instruction.scss";

function Instruction() {
  return (
    <section className="contenairInstruction">
      <h2>Instructions</h2>
      <p>Le but du jeu est de trouver ton héros le plus vite possible.</p>
      <p>
        En grattant la carte vous dévoilez le héros. Mais plus vous dévoilez le
        héros, moins vous gagnerez de Tokens.
      </p>
      <p>
        Quand vous avez deviné le héros, écrivez-le et appuyez sur le bouton
        valider. Si c'est le bon héros, vous gagnerez la carte du héros, mais
        aussi les Tokens correspondant.
      </p>
      <p>
        Vous pourrez aussi acheter les cartes des héros dans votre collection
        grâce aux Tokens.
      </p>
      <p className="last">
        Bonne partie et trouver le héros que vous appréciez le plus.
      </p>
    </section>
  );
}

export default Instruction;
