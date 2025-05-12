// import { useReducer, useState } from 'react';
// import './App.css'

// function App() {
//   const [state, dispatch] = useReducer(reducer,{ count: 0, incrementBy: 1});
//   function reducer(state, action) {
//     if (action.type == "increment") {
//       return { ...state, count: state.count + state.incrementBy }; // state - action.payload;
//     }
//     if (action.type == "decrement") {
//       return { ...state, count: state.count - state.incrementBy };
//     }
//     if (action.type == "setIncrement") {
//       return { ...state, incrementBy: action.payload }
//     }

//   }

//   return (
//     <div>
//      {state.count}
//      <input value={state.incrementBy} onChange={(e) => dispatch({ type: "setIncrement", payload: Number(e.target.value) })
//     }
//     type="text" />
//       <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
//         increment Count
//       </button>
//       <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
//         Decrement Count
//       </button>
//     </div>
//   );
// }

// export default App

// bank deposit

// import { useReducer, useState } from "react";
// import "./App.css";

// function App() {
//   function reducer(state, action) {
//     if (action.type == "add") {
//       return { ...state, balance: state.balance + action.payload };
//     }
//     if (action.type == "sub") {
//       return { ...state, balance: state.balance + action.payload };
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, { count: 0, balance: 0 });
//   const [amount, setAmount] = useState(0);

//   return (
//     <div>
//       {state.balance}
//       <input
//         onChange={(e) => setAmount(e.target.value)}
//         type="text"
//         value={amount}
//       />
//       <button
//         onClick={() => dispatch({ type: "add", payload: Number(amount) })}
//       >
//         Deposit
//       </button>
//       <button onClick={() => dispatch({ type: "sub", payload: Number(amount)})} >Withdraw</button>
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Dashboard from "./pages/Dashboard";
// import PageNotFound from "./pages/PageNotFound";
// import Nav from "./pages/Nav";
// import Profile from "./pages/Profile";
// import Settings from "./pages/Settings";
// import Products from "./pages/Products";

// function App() {
//   return (
//     <BrowserRouter>
//     <Nav />
//     <Routes>
//       <Route path="/" element={<Homepage />} />
//       <Route path="/products/:id" element={<Products />} />
//       <Route path="/dashboard" element={<Dashboard />} >
//         <Route path="profile" element={<Profile />} />
//         <Route path="settings" element={<Settings />} />
//         </Route>
//       <Route path="*" element={<PageNotFound />}/>
//     </Routes>
//     </BrowserRouter>
  
//   )
// }

// export default App;
 