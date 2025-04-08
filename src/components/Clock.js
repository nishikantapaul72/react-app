import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props); // Call the parent constructor
    // Initialize the state with the current date and time
    this.state = { date: new Date() };
  }
  componentDidMount() {
    // Lifecycle method called after the component is mounted
    // Set up a timer to update the state every second
    this.clockTimer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    //setState is used to update the state of the component
    // The setInterval function calls the provided function every 1000 milliseconds (1 second)
  }
  componentWillUnmount() {
    // Lifecycle method called before the component is unmounted
    // Clear the timer to prevent memory leaks
    clearInterval(this.clockTimer);
  }
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Hello - {this.props.children},{" "}
          {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default Clock;

/*
constructor → Initialize state.

componentDidMount → Set up setInterval to update the time.

setState every second → triggers render.

render → displays updated time.

componentWillUnmount  → clean up the interval.
*/
