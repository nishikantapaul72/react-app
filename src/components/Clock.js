import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD", show: "true" }; // Initialize state with date and locale
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  handleClick = (locale) => {
    // Handle button click event with parameter
    console.log("Button clicked with parameter!");
    this.setState((prevState) => ({
      locale,
      show: !prevState.show, // Toggle the show state
    }));
  };
  render() {
    const { date, locale, show } = this.state; // Destructure the date and locale from the state
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello - {this.props.children}, {date.toLocaleTimeString(locale)}
          </span>
        </h1>

        {locale === "bn-BD" ? (
          <button
            type="button"
            onClick={() => this.handleClick("en-US")}
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
            ঘড়ি পরিবর্তন করুন
          </button>
        ) : (
          <button
            type="button"
            onClick={() => this.handleClick("bn-BD")}
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
            Change Clock
          </button>
        )}
        {show && (
          <h1>{locale === "bn-BD" ? "Bangla Bangla" : "English English"}</h1>
        )}
      </div>
    );
  }
}

export default Clock;
