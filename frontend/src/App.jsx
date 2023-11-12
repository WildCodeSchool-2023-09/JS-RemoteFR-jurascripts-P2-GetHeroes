import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

import { useMemo, useState } from "react";
import Token from "./components/token/Token";
import ButtonPlay from "./components/button_play/ButtonPlay";
import Footer from "./components/footer/Footer";
import Title from "./components/title/Title";
import Newnav from "./components/menu_burger/Newnav";
import TokenContext from "./contexts/TokenContext";
import HeroesCollect from "./contexts/HeroesCollect";
import TokenPorcent from "./contexts/TokenPorcent";

function App() {
  const [token, setToken] = useLocalStorage("token", 0);
  const [display, setDisplay] = useSessionStorage("ButtonPlay", true);
  const [heroesCollected, setHeroesCollected] = useLocalStorage("heroesId", []);
  const theToken = useMemo(() => ({ token, setToken }), [token]);
  const theHeroes = useMemo(
    () => ({ heroesCollected, setHeroesCollected }),
    [heroesCollected]
  );

  const [scrPercent, setScrPercent] = useState(0);
  const perctTokens = useMemo(
    () => ({ scrPercent, setScrPercent }),
    [scrPercent]
  );

  const displayyes = () => {
    setDisplay(true);
  };
  const displayno = () => {
    setDisplay(false);
  };

  return (
    <TokenPorcent.Provider value={perctTokens}>
      <TokenContext.Provider value={theToken}>
        <HeroesCollect.Provider value={theHeroes}>
          <div className={display ? "App" : "App filterApp"}>
            <header>
              <Token />
              <Newnav displayYes={displayyes} displayNo={displayno} />
            </header>
            <main>
              <Title />
              <Link to="/game" onClick={displayno}>
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
    </TokenPorcent.Provider>
  );
}

export default App;
