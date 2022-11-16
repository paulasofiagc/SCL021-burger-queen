import { Link } from "react-router-dom";
import "../styles/init.css";
 import logo from '../img/logo-burger-joint.png'
export const Homepage = () => {
  return (
    <div className="home-container">
        <nav>
        <img src={logo} />
        <button className="menu-btn">Menú</button>
        </nav>
      <section className="buttons-container">
        <Link to="order">
          <button className="orderBtn">Botonsito orden</button>
        </Link>
        <Link to="kitchen">
          <button className="kitchenBtn">Botonsito Cocina</button>
        </Link>
      </section>
    </div>
  );
};
