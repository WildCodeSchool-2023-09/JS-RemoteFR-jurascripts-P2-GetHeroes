import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardColector({ hero }) {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <Link to={`/zoom_colector/${hero.id}`}>
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
    </Link>
  );
}
CardColector.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};
export default CardColector;
