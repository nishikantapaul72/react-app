import React from "react";
import useToggle from "./components/CustomComponent"; 

function App() {
  // Use the custom hook
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Toggle Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      {isVisible && <p>This content is toggled on!</p>}
    </div>
  );
}

export default App;
