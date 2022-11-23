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
      <div className="choose-protein">
        <button class="btn-protein">Meat</button>
		<button class="btn-protein">Chicken</button>
		<button class="btn-protein">Vegan</button>
      </div>
    </div>
  );
};
