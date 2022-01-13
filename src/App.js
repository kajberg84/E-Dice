import { Routing } from "./routes/Routing";
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";
//styles
import "./styles/global.css";
function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Routing />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
