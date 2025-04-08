import "./App.css";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <Clock locale="bn-BD" show="true">
        World!
      </Clock>
    </div>
  );
}

export default App;
