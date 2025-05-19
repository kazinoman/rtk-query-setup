import React from "react";
import { useAppDispatch, useAppSelector } from "../hook/useSelectorState";
import { decrement, increment } from "../redux/features/counter/counterSlice";
import { setCredentials } from "../redux/features/auth/authSlice";

const CounterComponent = () => {
  const state = useAppSelector();
  const dispatch = useAppDispatch();
  const counterValue = state.counter.value;

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {counterValue}
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button
        onClick={() =>
          dispatch(
            setCredentials({
              user: "abdullah al noman",
              token: ";alskdfjhlaksjdhasdf,asdfasdfasdfasdf.asdfasdfasdfasf;poiurpoiwer", // Or retrieve from localStorage/sessionStorage on initial load
              isAuthenticated: true,
            })
          )
        }
      >
        Set credencial
      </button>
    </div>
  );
};

export default CounterComponent;
