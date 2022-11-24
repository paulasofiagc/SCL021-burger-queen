import "../styles/takeOrder.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const ItemCounter = () => {
  return (
    <div className="counter-items">
      <h2>2 items</h2>
    </div>
  );
};
export const SendOrder = () => {
  return (
    <>
      <article className="price-container">
        <section className="information-order">
          <h3 id="total">Total</h3>
          <div id="price">
            <h4>$ 20.00 USD</h4>
          </div>
        </section>
      </article>
      <section className="final-order">
        <button className="sendOrderButton">
          <Link to="/kitchen">Send Order</Link>
        </button>
        <button className="exit">
          <Link to="/">Exit</Link>
          <Icon icon="icomoon-free:exit" color="white" width="20" height="20" />
        </button>
      </section>
    </>
  );
};
