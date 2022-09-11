import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from './store/counterSlice'

function App() {
  const globalState = useSelector((state) =>state)
   const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>

      <div className="counter">Counter: {globalState.counter.value}</div>
      <div>
        <button className="btn" onClick={() => dispatch(increase(5))}>increase +</button>
        <button className="btn" onClick={() => dispatch(decrease(2))}>decrease -</button>
      </div>

      <div>
        <button className="btn">
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
