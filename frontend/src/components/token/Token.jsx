import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import "./token.scss";

function Token() {
  const { token } = useContext(TokenContext);

  return (
    <section className="container-token">
      <p className="token">Token: {token}</p>
    </section>
  );
}

export default Token;
