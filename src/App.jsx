
import Checkout from "./Checkout";
import { UserProvider } from "./context/UserContext";
import Login from "./Login";

function App() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
      </UserProvider>
    </div>
  );
}

export default App;
