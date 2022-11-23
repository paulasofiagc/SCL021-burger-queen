import { Link } from "react-router-dom";
import "../styles/init.css";
import logo from "../img/logo-burger-joint.png";
import burgerOrden from "../img/burger-inicio.png";

export const Homepage = () => {
  return (
    <div className="home-container">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <button className="menu-btn">Menú</button>
      </nav>
      <section className="buttons-container">
        <button className="orderBtn">
          <Link to="order">New Order</Link>
          <img src={burgerOrden} className="burger-inicio" alt="burger"></img>
        </button>
        <button className="kitchenBtn">
          <Link to="kitchen">Kitchen</Link>
          <img src={burgerOrden} className="burger-inicio" alt="burger"></img>
        </button>
      </section>
    </div>
  );
};
