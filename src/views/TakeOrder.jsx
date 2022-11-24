import { Card, CardLunch } from "../components/card";
import { Category } from "../components/category";
import { TableNumber } from "../components/selectTable";
import { Nav } from "../components/nav";
import "../styles/takeOrder.css";
import { ItemCounter, SendOrder } from "../components/itemCounter";
import menu from "../data/menu.json";

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
        <div id="justCardProducts">
          {menu.Desayuno.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          {menu.Almuerzo.map((item, index) => (
            <CardLunch key={index} item={item} />
          ))}
          {menu.Acompañamiento.map((item, index) => (
            <Card key={index} item={item} />
          ))}
          {menu.Bebidas.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
        <div className="item-counter">
        <ItemCounter />
        <SendOrder />
    </div>

      </div>
    </div>
  );
};
