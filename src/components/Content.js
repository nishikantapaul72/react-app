import { useContext } from "react";
import ThemeContext from "../contexts/themeContext.js";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
  const context = useContext(ThemeContext); // Using useContext hook to consume context
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(
          counter,
          incrementCount // This is a render prop
        ) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}
