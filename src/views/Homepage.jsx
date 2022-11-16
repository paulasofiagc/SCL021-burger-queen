import { Link } from "react-router-dom";
import "../styles/init.css";
import logo from "../img/logo-burger-joint.png";
import burgerOrden from "../img/burger-inicio.png";
export const Homepage = () => {
  return (
    <div className="home-container">
      <nav>
        <img src={logo} alt="logo"/>
        <button className="menu-btn">Menú</button>
      </nav>
      <section className="buttons-container">
        <Link to="order">
          <button className="orderBtn">
          <img src={burgerOrden} className="burger-inicio"alt="burger"></img>New Order</button>
        </Link>
        <Link to="kitchen">
          <button className="kitchenBtn">
            <img src={burgerOrden} className="burger-inicio"alt="burger"></img>Kitchen
          </button>
        </Link>
      </section>
    </div>
  );
};
