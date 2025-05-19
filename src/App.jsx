import { createContext, useState } from "react";
import Checkout from "./Checkout";
import Login from "./Login";
import Logout from "./Logout";
import { UserProvider } from "./context/UserContext";
import UseDisplayMessage from "./hooks/useDisplayMessage";

function App() {
  const [message, displayMessage] = UseDisplayMessage();
  displayMessage();
  return <div>Message is : {message}</div>;
  
}

export default App;
