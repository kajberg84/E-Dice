import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
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
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Routing = () => {
  const { user } = useContext(UserContext);

  // Navigerar till login om ej user finns annars så returneras componenten
  function RequireAuth() {
    let location = useLocation();

    if (!user) {
      return <Navigate to={RoutingPath.Login} state={{ from: location }} />;
    }
    return <Outlet />;
  }

  function HideLoginViewForAuthedUser() {
    let location = useLocation();

    if (user) {
      return <Navigate to={RoutingPath.Account} state={{ from: location }} />;
    }
    return <Outlet />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path={RoutingPath.Register} element={<Register />} />
            <Route path={RoutingPath.Terms} element={<Terms />} />
            <Route path={RoutingPath.Privacy} element={<Privacy />} />
            <Route path={RoutingPath.Checkout} element={<Checkout />} />
            <Route
              path={RoutingPath.OrderConfirmation}
              element={<OrderConfirmation />}
            />
            <Route element={<RequireAuth />}>
              <Route path={RoutingPath.Account} element={<Account />} />
            </Route>
            <Route element={<HideLoginViewForAuthedUser/>}>
              <Route path={RoutingPath.Login} element={<Login />} />
            </Route>
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
