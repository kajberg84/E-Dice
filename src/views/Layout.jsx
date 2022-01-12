import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 420px)" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
