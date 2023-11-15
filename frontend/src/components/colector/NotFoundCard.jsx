import PropTypes from "prop-types";
import { useState } from "react";
import "./colector.scss";

function NotFoundCard({ handleBuy, hero }) {
  const [showBuyButton, setShowBuyButton] = useState(false);
  const handleCardClick = () => {
    setShowBuyButton(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setShowBuyButton(true);
    }
  };
  return (
    <div
      className="notFoundCard"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {showBuyButton && (
        <button
          className="buyCardButton"
          type="button"
          onClick={() => {
            handleBuy(hero);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M2 2h4l2.68 13.39a2 2 0 0 0 1.92 1.61h8.8a2 2 0 0 0 1.92-1.61L22 6H6" />
          </svg>
          2000
        </button>
      )}
      <div className="hero-name-overlay">{hero.name}</div>
    </div>
  );
}
NotFoundCard.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  handleBuy: PropTypes.func.isRequired,
};

export default NotFoundCard;
