import React, { useState, useEffect } from "react";

function MyComponent() {
  // State variables
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // Function to update the date
  const tick = () => {
    setDate(new Date());
  };

  // useEffect - Runs after the first render (componentDidMount)
  useEffect(() => {
    console.log("Component Mounted or Date Updated");
    const intervalId = setInterval(tick, 1000); // Update date every second

    // Cleanup function (componentWillUnmount equivalent)
    return () => {
      console.log("Cleanup on unmount or date change");
      clearInterval(intervalId); // Clear interval when component unmounts or date updates
    };
  }, []); // Empty array means this effect runs only once, like componentDidMount

  // useEffect - Runs when `count` changes (componentDidUpdate for `count`)
  useEffect(() => {
    console.log(`Updated document title: Clicked ${count} times`);
    document.title = `Clicked ${count} times`; // Update browser tab title on count change
  }, [count]); // Runs when count changes (dependencies array)

  // useEffect - Runs after every render (componentDidUpdate equivalent)
  useEffect(() => {
    console.log("Component Rendered");
  }); // No dependency array means it runs after every render

  // Function to handle button click
  const addClick = () => {
    setCount((prevCount) => prevCount + 1); // Increment the count by 1
  };

  return (
    <div>
      <h1>UseEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={addClick}>Increment Count</button>
      <p>Current Date: {date.toLocaleTimeString()}</p>
    </div>
  );
}

export default MyComponent;
