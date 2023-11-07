import ApiHeroes from "../../data/ApiHeroes";
import "./collection.scss";

function Collection() {
  const { heroes } = ApiHeroes();
  return (
    <section className="cardList">
      <div>
        {heroes.map((hero) => (
          <div key={hero.id} className="border">
            <img className="heroCard" src={hero.image.url} alt="name" />;
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
