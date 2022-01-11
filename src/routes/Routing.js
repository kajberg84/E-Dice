import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutingPath } from "./RoutingPath";
import { Layout } from "../views/Layout";
import { Shop } from "../views/shop/Shop";
import { Checkout } from "../views/checkout/Checkout";
import { Login } from '../views/login/Login';
import { Account } from '../views/account/Account';
import { OrderConfirmation } from '../views/orderconfirmation/OrderConfirmation';
import { Register } from '../views/register/Register';
import { Terms } from '../views/terms/Terms';
import { Privacy } from '../views/privacy/Privacy';

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
            <Route path={RoutingPath.Register} element={<Register />} />
            <Route path={RoutingPath.Terms} element={<Terms />} />
            <Route path={RoutingPath.Privacy} element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
