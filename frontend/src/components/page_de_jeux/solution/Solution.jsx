import "./solution.scss";

function Solution() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const heroValider = formData.get("valider");
    // eslint-disable-next-line no-alert
    alert(heroValider);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Quel est ce héro?"
        type="text"
        className="solutionText"
        name="valider"
      />
      <button type="submit">Valider</button>
    </form>
  );
}

export default Solution;
