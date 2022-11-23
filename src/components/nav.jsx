import "../styles/takeOrder.css";
import logo from "../img/logo-burger-joint.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <section>
      <section id="header">
        <div className="one-container">
          <div className="name">
            <h2 id="welcome">Hi, Paula</h2>
            <Icon
              icon="mdi:human-greeting-variant"
              color="white"
              width="40"
              height="40"
            />
          </div>
          <div className="btn">
            <Link to="/kitchen">
              <button className="btn-order">Order History</button>
            </Link>
          </div>
        </div>
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
      </section>
    </section>
  );
};
