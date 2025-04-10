import { useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const [warning, setWarning] = useState("");
  const [extraInfo, setExtraInfo] = useState({
    description: "",
    completed: false,
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTitle(value);
    setWarning(value.length > 20 ? "Title is too long!" : "");
  };

  const handleExtraChange = (event) => {
    console.log("kkkk", event.target);
    const { name, value, type, checked } = event.target;
    setExtraInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="todo">
      <h1>Todo</h1>
      <p>Todo List</p>
      <p>{title}</p>
      <p>
        <textarea value={title} onChange={handleInputChange} />
      </p>

      {/* Extra Info Inputs */}
      <p>
        <input
          type="text"
          name="description"
          placeholder="Add a description..."
          value={extraInfo.description}
          onChange={handleExtraChange}
        />
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={extraInfo.completed}
            onChange={handleExtraChange}
          />
          Mark as Completed
        </label>
      </p>

      <hr />

      {/* Visualization of extraInfo */}
      <h3>Preview:</h3>
      <p>
        <strong>Description:</strong> {extraInfo.description}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        {extraInfo.completed ? "✅ Done" : "❌ Not Done"}
      </p>
      <h2>{warning || "Good Choice"}</h2>
    </div>
  );
}

export default Todo;
