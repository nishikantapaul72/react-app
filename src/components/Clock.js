import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  handleClick1 = () => {
    // Arrow function to handle button click
    // This ensures 'this' refers to the class instance
    // Handle button click event
    console.log("Button clicked!");
    this.setState({ locale: "en-US" }); // Update the locale in the state
  };

  handleClick2 = (locale) => {
    // Handle button click event with parameter
    console.log("Button clicked with parameter!");
    this.setState({ locale }); // Update the locale in the state
  };
  render() {
    const { date, locale } = this.state; // Destructure the date and locale from the state
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello - {this.props.children}, {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <button
          type="button"
          onClick={this.handleClick1}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Set English (Default)
        </button>

        <button
          type="button"
          onClick={() => this.handleClick2("en-US")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Set English (Parameter)
        </button>
      </div>
    );
  }
}

export default Clock;
