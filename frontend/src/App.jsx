import { useLocalStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage("token", 0);
  const [afficher, setAfficher] = useLocalStorage("Bouton-Play", true);

  const afficherOuNon = () => {
    setAfficher(!afficher);
  };

  return (
    <div className="App">
      <header>
        <Token token={token} />
      </header>
      <main>
        <Titre />
        <Link to="/jeux" onClick={afficherOuNon}>
          <BoutonPlay playAfficher={afficher} />
        </Link>
        <Outlet />
        <BoutonPlay />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
