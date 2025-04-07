import React from "react"; // this is used to create elements
import ReactDOM from "react-dom/client"; // this is used to render elements

// const element = React.createElement("h1", null, "Hello, world!");

const element = <h1>Hello, world!</h1>;

// this is the same as:
// React.createElement(
//   "h1",
//   null,
//   "Hello, world!"

console.log(element);

//react elements are immutable(they cannot be changed)
const element2 = (
  <h1 className="greeting">
    Hello, world!
    <span className="text">How are you?</span>
  </h1>
);
console.log(element2);
/*
element2 ={
  type: "h1",
  props: {
    className: "greeting",
    children: [
      "Hello, world!",
      {
        type: "span",
        props: {
          className: "text",
          children: "How are you?",
        },
      },
    ],
  },
};
}
*/
// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render element to the root
root.render(element2);
