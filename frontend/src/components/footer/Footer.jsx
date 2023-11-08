import "./footer.scss";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

function Footer() {
  return (
    <section className="footer">
      <div className="bigContainer">
        <div className="logoWild">
          {" "}
          <img
            src="https://www.wildcodeschool.com/hubfs/logo-mono-white.svg"
            alt=""
          />
        </div>
        <div className="container">
          <ul className="nameComponent">
            <li>Cédric</li>
            <li>Nelson</li>
            <li>Alhassane</li>
            <li>Maxence</li>
          </ul>
          <ul className="logoComponent">
            <li className="network">
              <AiFillInstagram />
            </li>
            <li className="network">
              <AiFillFacebook />
            </li>
            <li className="network">
              <AiOutlineTwitter />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
