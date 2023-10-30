import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Newnav.scss";

function Newnav() {
  const [burgrToggle, setBurgerToggle] = useState(false);

  const toggleMenu = () => {
    setBurgerToggle(!burgrToggle);
  };
  return (
    <div className="navbar">
      {burgrToggle && (
        <ul className="navlinks">
          <li className="nav_items">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_items">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="nav_link">
              Instruction
            </a>
          </li>
          <li className="nav_items">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="" className="nav_link">
              Collection
            </a>
          </li>
        </ul>
      )}
      <AiOutlineMenu onClick={() => toggleMenu()} className="menu_burger" />
    </div>
  );
}

export default Newnav;
