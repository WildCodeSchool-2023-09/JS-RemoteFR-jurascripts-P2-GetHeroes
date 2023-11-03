import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";
import Newnav from "./components/menu_burger/Newnav";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage("token", 0);
  const [afficher, setAfficher] = useSessionStorage("BoutonPlay", true);

  const afficherOuNon = () => {
    setAfficher(!afficher);
  };

  return (
    <div className="App">
      <header>
        <Token token={token} />
        <Newnav />
      </header>
      <main>
        <Titre />
        <Link to="/jeux" onClick={afficherOuNon}>
          {afficher === true ? <BoutonPlay /> : <div className="rien"> </div>}
        </Link>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
