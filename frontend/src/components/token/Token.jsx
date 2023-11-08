import "./token.scss";
import { useContext } from "react";
import TokenContext from "../../../contexts/TokenContext";

function Token() {
  const { token } = useContext(TokenContext);

  return (
    <section className="contenairToken">
      <p className="token">Token: {token}</p>
    </section>
  );
}

export default Token;
