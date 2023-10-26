import { useEffect, useState } from "react";
import "./App.css";
import Token from "./components/token/Token";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(+localStorage.getItem("token") || 0);

  useEffect(() => {
    localStorage.setItem("token", token.toString());
  }, [token]);

  return (
    <div className="App">
      <header>
        <Token token={token} />
      </header>
    </div>
  );
}

export default App;
