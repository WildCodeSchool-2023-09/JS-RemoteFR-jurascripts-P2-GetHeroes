import { useState } from "react";
import PropTypes from "prop-types";

function CardColector({ hero }) {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div style={isDisplay ? {} : { display: "none" }} className="card">
      <img
        className="colector-picture"
        src={hero.image.url}
        alt={hero.name}
        onError={() => {
          setIsDisplay(false);
        }}
      />
      <h3 className="hero-name">{hero.name}</h3>
    </div>
  );
}
CardColector.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
export default CardColector;
