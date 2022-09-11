import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "./store/counterSlice";
import { logIn, logOut } from "./store/authSlice";

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

 

  const clickHandler = () => {
 
    console.log(globalState.auth.isLoggedIn)
    if (globalState.auth.isLoggedIn == true) {
      dispatch(logOut())
    }

   
    
    if (globalState.auth.isLoggedIn == false) {
      dispatch(logIn())
    }
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.auth.isLoggedIn && (
        <>
          <div className="counter">Counter: {globalState.counter.value}</div>
          <div>
            <button className="btn" onClick={() => dispatch(increase(5))}>
              increase +
            </button>
            <button className="btn" onClick={() => dispatch(decrease(2))}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={clickHandler}>
          {globalState.auth.isLoggedIn ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
}

export default App;
