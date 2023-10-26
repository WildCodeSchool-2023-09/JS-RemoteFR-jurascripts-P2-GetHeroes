import PropTypes from "prop-types";
import "./token.scss";

function Token({ token }) {
  return (
    <section className="contenairToken">
      <p className="token">Token: {token}</p>
    </section>
  );
}

Token.propTypes = {
  token: PropTypes.number.isRequired,
};

export default Token;
