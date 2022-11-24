import "../styles/takeOrder.css";

export const Card = ({ item }) => {
  const { name, price, description, image } = item;
  return (
    <div className="product-card">
      <div id="product-image">
        <img src={image} alt="comida-foto" />
      </div>
      <div id="product-information">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="total-card">
          <h3 id="weight-sign">$</h3>
          <h3 id="price">{price}</h3>
        </div>
      </div>
    </div>
  );
};
export const CardLunch = ({ item }) => {
  const { name, price, description, image } = item;
  return (
    <section className="product-card">
      <div id="product-image">
        <img src={image} alt="comida-foto" />
      </div>
      <div id="product-information">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="total-card">
          <h3 id="weight-sign">$</h3>
          <h3 id="price">{price}</h3>
        </div>
      </div>
      <article id="name-protein">
        <h5 className="choose-protein">Choose the protein</h5>
      <select className="select-protein">
        <option class="btn-protein">Meat</option>
        <option class="btn-protein">Chicken</option>
        <option class="btn-protein">Vegan</option>
      </select>
      </article>
    </section>
  );
};
