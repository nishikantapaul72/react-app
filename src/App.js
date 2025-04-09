import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
  const quantities = [1, 2, 3];
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
