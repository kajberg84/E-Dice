import { Routing } from "./routes/Routing";
import BasketProvider from "./context/BasketContext";
import UserProvider from "./context/UserContext";
//styles
import "./styles/global.css";
function App() {
  return (
    <>
      <UserProvider>
        <BasketProvider>
          <Routing />
        </BasketProvider>
      </UserProvider>
    </>
  );
}

export default App;
