import { Link } from "react-router-dom";
import "./Errorpage.scss";

function Errorpage() {
  return (
    <div className="notFound">
      <h1>Sorry </h1>
      <p>La page est introuvable</p>
      <Link to="/">Retour à la page de jeu ...</Link>
      <hr /> <strong className="nopage">404</strong>
    </div>
  );
}

export default Errorpage;
