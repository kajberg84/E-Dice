import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoutingPath } from "./RoutingPath";
import { Layout } from "../views/Layout";
import { Shop } from "../views/Shop";
import { Checkout } from "../views/Checkout";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Shop />} />
            <Route path={RoutingPath.Checkout} element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
