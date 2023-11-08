import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

import "./Newnav.scss";
import { Link } from "react-router-dom";

function Newnav({ displayYes, displayNo }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="navbar">
      {isClicked && (
        <ul className="navlinks">
          <li className="nav_items">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              to="/"
              onClick={() => {
                toggleMenu();
                displayYes();
              }}
              className="nav_link"
            >
              Home
            </Link>
          </li>
          <li className="nav_items">
            <Link
              to="/instruction"
              onClick={() => {
                toggleMenu();
                displayNo();
              }}
              className="nav_link"
            >
              Instructions
            </Link>
          </li>
          <li className="nav_items">
            <Link
              to="/colector"
              onClick={() => {
                toggleMenu();
                displayNo();
              }}
              className="nav_link"
            >
              Collection
            </Link>
          </li>
        </ul>
      )}
      {isClicked ? (
        <AiOutlineClose onClick={() => toggleMenu()} className="menu_burger" />
      ) : (
        <AiOutlineMenu onClick={() => toggleMenu()} className="menu_burger" />
      )}
    </div>
  );
}

Newnav.propTypes = {
  displayYes: PropTypes.func.isRequired,
  displayNo: PropTypes.func.isRequired,
};

export default Newnav;
