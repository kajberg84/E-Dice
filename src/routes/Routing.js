import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutingPath } from "./RoutingPath";
import { Layout } from "../views/Layout";
import { Shop } from "../views/Shop";
import { Checkout } from "../views/Checkout";
import { Login } from '../views/Login';
import { Account } from '../views/Account';
import { OrderConfirmation } from '../views/OrderConfirmation';

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path={RoutingPath.Checkout} element={<Checkout />} />
            <Route path={RoutingPath.Login} element={<Login />} />
            <Route path={RoutingPath.Checkout} element={<Checkout />} />
            <Route path={RoutingPath.Account} element={<Account />} />
            <Route path={RoutingPath.OrderConfirmation} element={<OrderConfirmation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
