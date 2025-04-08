import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {
  // Default to an empty array if no quantities are provided
  return (
    <>
      <div>
        {quantities.map(
          (
            key // key is a unique identifier for each clock
          ) => (
            // Use the key to generate a unique Clock component
            <Clock key={key} />
          )
        )}
      </div>
    </>
  );
}
