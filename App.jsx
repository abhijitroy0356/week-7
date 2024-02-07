import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Homepage from "./components/Homepage";
const Dashboard = React.lazy(()=>import("./components/Dashboard"))
const Homepage = React.lazy(()=>import("./components/Homepage"))
// this is how we do client side routing the real way
//===================================================
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Apprender />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
function Apprender() { // reason to use this function and using "useNavigator" inside the function is because this is the only way to make the usenavgator to understand the hiarckey of routing in the page, it have to be wrapped inside the browserroute
  const navigator= useNavigate();
  return(
  <>
  <div>
    <button
      onClick={() => {
        // window.location.href = "/"; because this is not the right way of implementing the client side , react follows the rule of single page application but if we follow this method then it is refreshing rather than re-rendering
        navigator('/')
      }}
    >
      Homepage
    </button>
    <button
      onClick={() => {
        // window.location.href = "/dashboard";because this is not the right way of implementing the client side , react follows the rule of single page application but if we follow this method then it is refreshing rather than re-rendering
        navigator('/dashboard')
      }}
    >
      dashboard
    </button>
  </div>
  </>
  )
  
}

export default App;
