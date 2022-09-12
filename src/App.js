import "./App.css";
import {  useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increase, decrease } from "./store/counterSlice";
import { login, logout } from "./store/authSlice";

//1-useEffect
//2-update State
//3-re render
//4-useEffect
//عشان كدا لما بتسخدم يوزايفكت الكونتر بيعد كتير بالرغم ان الفانكشن في الاعتماد محصلهاش حاجه طيب اي السر
// ************ re evaluate *********** السر
// counterHandler ليها ref ثابت
//لكن بيحصل ان كل مره بيرندر انه بيدي ريف جديد للفانكشن فبتتعرف تاني من الاخر الفانكشن بتتحور
//فكدا دا يعتبر تغيير فيحصل dipatch
//useCallback هنا بتقول لو سمحت يا رياكت محدش يعمل رن للفانكشن دي الا لما في حاجات جواها تتغير
//عكس ذلك لا
//التحديث الجديد في ريدكس حتي لو معملتش نفس الكلام هو بيهندله ممكن اعمل ديسباتش عالطول من يوزايفكت مش هيحصل مشكله ريافليوت

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else {
        dispatch(decrease(value));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    counterHandler("increase", 25);
  }, [counterHandler]);

  const clickHandler = () => {
    console.log(globalState.auth.isLoggedIn);
    if (globalState.auth.isLoggedIn === true) {
      dispatch(logout());
    }

    if (globalState.auth.isLoggedIn === false) {
      dispatch(login());
    }
  };

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.auth.isLoggedIn && (
        <>
          <div className="counter">Counter: {globalState.counter.value}</div>
          <div>
            <button
              className="btn"
              onClick={() => counterHandler("increase", 20)}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => counterHandler("decrease", 2)}
            >
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
