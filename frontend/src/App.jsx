import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Token from "./components/token/Token";
import BoutonPlay from "./components/bouton_play/BoutonPlay";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(+localStorage.getItem("token") || 0);
  const [playAfficher, setPlayAfficher] = useState(true);

  const replacePlay = () => {
    setPlayAfficher(!playAfficher);
  };

  useEffect(() => {
    localStorage.setItem("token", token.toString());
  }, [token]);

  return (
    <div className="App">
      <header>
        <Token token={token} />
      </header>
      <main>
        <Link to="/jeux" onClick={replacePlay}>
          <BoutonPlay playAfficher={playAfficher} />
        </Link>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
