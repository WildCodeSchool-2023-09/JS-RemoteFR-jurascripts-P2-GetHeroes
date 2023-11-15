import { Link, useRouteError } from "react-router-dom";
import "./Errorpage.scss";

function Errorpage() {
  const errorPages = useRouteError();

  return (
    <div className="notFound">
      <h1>Sorry </h1>
      <p>{errorPages.statusText || errorPages.message}</p>
      <p>La page est introuvable</p>
      <Link to="/game">Retour à la page de jeu ...</Link>
      <hr /> <strong className="nopage">404</strong>
    </div>
  );
}

export default Errorpage;
