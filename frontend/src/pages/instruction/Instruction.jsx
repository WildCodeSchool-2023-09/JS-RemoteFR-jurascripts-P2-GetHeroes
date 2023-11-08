import "./instruction.scss";

function Instruction() {
  return (
    <section className="container-instruction">
      <h2 className="title-instruction">Instructions</h2>
      <p className="game-instruction">
        Le but du jeu est de trouver ton héros le plus vite possible.
      </p>
      <p className="game-instruction">
        En grattant la carte vous dévoilez le héros. Mais plus vous dévoilez le
        héros, moins vous gagnerez de Tokens.
      </p>
      <p className="game-instruction">
        Quand vous avez deviné le héros, écrivez-le et appuyez sur le bouton
        valider. Si c'est le bon héros, vous gagnerez la carte du héros, mais
        aussi les Tokens correspondant.
      </p>
      <p className="game-instruction">
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
