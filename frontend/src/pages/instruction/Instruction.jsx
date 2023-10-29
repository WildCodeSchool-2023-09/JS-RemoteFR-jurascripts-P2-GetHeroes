import "./instruction.scss";

function Instruction() {
  return (
    <section className="contenairInstruction">
      <h2>Instruction</h2>
      <p>Le but du jeu est de trouver ton héros le plus vite possible.</p>
      <p>
        Le bouton Révéler vous permet de dévoiler le héros. Mais plus vous
        révélerez le héros, moins vous gagnerez de Tokens.
      </p>
      <p>
        Quand vous avez deviné le héros, écrivez-le et appuyez sur le bouton
        valider. Si c'est le bon héros, vous gagnerez la carte du héros, mais
        aussi des token en fonction du nombre de fois que vous aurez pu le
        révéler.
      </p>
      <p>
        Vous pourrez aussi acheter des cartes des héros dans votre collection
        grâce aux tokens.
      </p>
      <p className="last">
        Bonne partie et trouver le héros que vous appréciez le plus.
      </p>
    </section>
  );
}

export default Instruction;
