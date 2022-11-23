import { Card } from "../components/card";
import { Category } from "../components/category";
import { ItemCounter} from "../components/itemCounter";
import {  TableNumber } from "../components/selectTable";
import { Nav } from "../components/nav";
import "../styles/takeOrder.css";

export const TakeOrder = () => {
  return (
    <div id="orderContainer">
      <div id="navContainer">
        <Nav />
      </div>
      <div className="bodyContainer">
        <Category />
        <TableNumber />
      </div>
      <div className="card-counter">
        <Card />
        <ItemCounter />
      </div>
    </div>
  );
};
