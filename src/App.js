import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from 'react';
function App() {



  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);

  const handlerCounterValue = (value) => {
    if (value < 0) {
       return  'no number'
    }
    
    return value
  }


    // const counterState = useSelector((state) => {
  //   return state.value;
  // });

  // const toggleState = useSelector((state) => {
  //   return state.showCounter;
  // });
  const counterOperation = useCallback((type, payload) => {
      dispatch({type , payload})
    }
    , [dispatch])
  //useCallback كان 
  //هي الل بتعقل يوز ايفكت تقولها خالي بالك هي نفس الفانكشن
  //مترنيش تاني

  // const counterOperation = (type, payload) => {
  //   dispatch({type , payload})
  // }

  useEffect(() => {
    counterOperation('increase' , 10)
  }, [counterOperation])
  
  // in case i use useEffect only without usecallback the counter 
  //counterOperationيوز ايفكت هتبقي غبيه وكل شويه هتروح تنفذ الفانكشن بتاعه
//وبالتالي هتعمل re evaluate
  //الحل اني استخدم يوزكولباك عشان اقوله خلي بالك هي نفس الفانكشن ليه بتتشغلي عمال علي بطال

  // const increase = () => {
  //   const action = { type: "increase", payload: 5 };
  //   dispatch(action);
  // };

  // const decrease = () => {
  //   const action = { type: "decrease", payload: 2 };
  //   dispatch(action);
  // };


  const toggleCounter = () => {
    const action = { type: 'toggleCounter' }
    dispatch(action)
  }
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.showCounter && (
        <>
          <div className="counter">Counter: {handlerCounterValue(globalState.value)}</div>
          <div>
            <button className="btn" onClick={() => counterOperation('increase' , 6)}>
              increase +
            </button>
            <button className="btn" onClick={() =>  counterOperation('decrease' , 3)}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={toggleCounter}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
