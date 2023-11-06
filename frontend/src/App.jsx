import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import "./App.css";
import { useEffect, useState } from "react";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";
import Newnav from "./components/menu_burger/Newnav";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage("token", 0);
  const [afficher, setAfficher] = useSessionStorage("BoutonPlay", true);

  const afficherOui = () => {
    setAfficher(true);
  };
  const afficherNon = () => {
    setAfficher(false);
  };

  return (
    <div className="App">
      {loader ? (
        <section className="contenairLoader">
          <RingLoader className="loader" color="#f7e700" size={100} />
        </section>
      ) : (
        <>
          <header>
            <Token token={token} />
            <Newnav afficherOui={afficherOui} afficherNon={afficherNon} />
          </header>
          <main>
            <Titre />
            <Link to="/jeux" onClick={afficherNon}>
              {afficher === true ? (
                <BoutonPlay />
              ) : (
                <div className="rien"> </div>
              )}
            </Link>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
