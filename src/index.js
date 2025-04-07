import React from "react";
import ReactDOM from "react-dom/client";

// Create a class-based component called Clock
class Clock extends React.Component {
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

// use the createRoot method for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
React Fragments (<> ... </>): This allows you to return multiple elements without introducing a new parent element in the DOM. 
It's a shorthand for <React.Fragment>.
*/
// Render both Clock components inside a parent element
root.render(
  <>
    <Clock locale="bn-BD" />
    <Clock locale="bn-BD">Test</Clock>
  </>
);
