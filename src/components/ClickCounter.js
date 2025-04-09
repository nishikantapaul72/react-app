import withCounter from "./HOC/withCounter.js";

const ClickCounter = (props) => {
  //probs passed from the HOC(withCounter) component to the ClickCounter component
  const { count, incrementCount } = props;
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

/**
 * Steps:
 * 1. The withCounter HOC is called with ClickCounter as its argument.
 * 2. The withCounter HOC returns a new component (NewComponent) that wraps ClickCounter.
 * 3. When NewComponent is rendered, it initializes its state and provides the count and incrementCount props to ClickCounter.
 * 4. ClickCounter receives these props and uses them to display the count and handle button clicks.
 *
 * Exports the ClickCounter component wrapped with the higher-order component (HOC) `withCounter`.
 * The `withCounter` HOC is used to enhance the ClickCounter component by adding additional functionality,
 * such as state management for counting clicks.
 */

export default withCounter(ClickCounter);
