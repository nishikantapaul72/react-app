import { useReducer } from "react";

// Initial state as an object with two properties
const initialState = {
  count: 0,
  step: 1, // the value by which count will increment or decrement
};

// Reducer function handles all state changes based on the action type
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState; // resets to the original state
    case "setStep":
      return { ...state, step: action.payload }; // dynamically change the step value
    case "setCount":
      return { ...state, count: action.payload }; // directly set count to a specific number
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Count: {state.count}</h2>
      <h4>Step: {state.step}</h4>

      {/* Button to increment the count */}
      <button onClick={() => dispatch({ type: "increment" })}>
        ➕ Increment
      </button>

      {/* Button to decrement the count */}
      <button onClick={() => dispatch({ type: "decrement" })}>
        ➖ Decrement
      </button>

      {/* Button to reset the state to initial values */}
      <button onClick={() => dispatch({ type: "reset" })}>🔁 Reset</button>

      <hr />

      {/* Input field to update the 'step' value */}
      <label>
        Set Step:
        <input
          type="number"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
        />
      </label>

      <br />

      {/* Input field to directly update the count */}
      <label>
        Set Count:
        <input
          type="number"
          value={state.count}
          onChange={(e) =>
            dispatch({ type: "setCount", payload: Number(e.target.value) })
          }
        />
      </label>
    </div>
  );
}
