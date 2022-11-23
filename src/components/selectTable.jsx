import "../styles/takeOrder.css";
import { Icon } from "@iconify/react";

export const TableNumber = () => {
  return (
    <div id="carrito">
      <div id="counterContainer">
        <div className="order-div">
          <h2 id="order-name">Order</h2>
          <h4>Remove</h4>
        </div>
        <div className="number-table">
          <h3 id="choose-table">Table</h3>
          <select id="tableSelect">
            <option>
              <Icon
                icon="material-symbols:keyboard-arrow-down"
                width="30"
                height="30"
              />
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};
