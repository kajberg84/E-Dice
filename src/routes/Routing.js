import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutingPath } from "./RoutingPath";
import { Layout } from "../views/Layout";
import { Shop } from "../views/shop/Shop";
import { Checkout } from "../views/checkout/Checkout";
import { Login } from "../views/login/Login";
import { Account } from "../views/account/Account";
import { OrderConfirmation } from "../views/orderconfirmation/OrderConfirmation";
import { Register } from "../views/register/Register";
import { Terms } from "../views/terms/Terms";
import { Privacy } from "../views/privacy/Privacy";
import { NotFound } from "../views/notfound/NotFound";
import { AuthRoute } from "./AuthRoute";
import { UnAuthRoute } from "./UnAuthRoutes";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Shop />} />
            <Route
              path={RoutingPath.Register}
              element={
                <UnAuthRoute>
                  <Register />
                </UnAuthRoute>
              }
            />
            <Route path={RoutingPath.Terms} element={<Terms />} />
            <Route path={RoutingPath.Privacy} element={<Privacy />} />
            <Route path={RoutingPath.Checkout} element={<Checkout />} />
            <Route
              // path={RoutingPath.OrderConfirmation}
              path={`${RoutingPath.OrderConfirmation}/:firstname/:lastname/:address/:zipcode/:city/:phone/:email`}
              element={<OrderConfirmation />}
            />
            <Route
              path={RoutingPath.Account}
              element={
                <AuthRoute>
                  <Account />
                </AuthRoute>
              }
            />
            <Route
              path={RoutingPath.Login}
              element={
                <UnAuthRoute>
                  <Login />
                </UnAuthRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
