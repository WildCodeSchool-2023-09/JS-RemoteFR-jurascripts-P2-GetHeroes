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
          onClick={() => handleBuy(hero)}
        >
          Acheter
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
