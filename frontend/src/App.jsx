import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

import { useMemo } from "react";
import Token from "./components/token/Token";
import ButtonPlay from "./components/button_play/ButtonPlay";
import Footer from "./components/footer/Footer";
import Titre from "./components/titre/Titre";
import Newnav from "./components/menu_burger/Newnav";
import TokenContext from "./contexts/TokenContext";
import HeroesCollect from "./contexts/HeroesCollect";

function App() {
  const [token, setToken] = useLocalStorage("token", 0);
  const [display, setDisplay] = useSessionStorage("ButtonPlay", true);
  const [heroesCollected, setHeroesCollected] = useLocalStorage("Héros Id", []);
  const theToken = useMemo(() => ({ token, setToken }), [token]);
  const theHeroes = useMemo(
    () => ({ heroesCollected, setHeroesCollected }),
    [heroesCollected]
  );

  const displayyes = () => {
    setDisplay(true);
  };
  const displayno = () => {
    setDisplay(false);
  };

  return (
    <TokenContext.Provider value={theToken}>
      <HeroesCollect.Provider value={theHeroes}>
        <div className="App">
          <header>
            <Token />
            <Newnav displayyes={displayyes} displayno={displayno} />
          </header>
          <main>
            <Titre />
            <Link to="/jeux" onClick={displayno}>
              {display === true ? (
                <ButtonPlay />
              ) : (
                <div className="Nothing"> </div>
              )}
            </Link>
            <Outlet />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </HeroesCollect.Provider>
    </TokenContext.Provider>
  );
}

export default App;
