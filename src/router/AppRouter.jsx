import { Routes, Route } from "react-router-dom";
import { Homepage } from "../views/Homepage";
import { KitchenOrders } from "../views/KitchenOrders";
import { NotFound } from "../views/NotFound";
import { TakeOrder } from "../views/TakeOrder";

//  Router
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/order" element={<TakeOrder />} />
        <Route path="/kitchen" element={<KitchenOrders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
