import React, { useEffect, useRef, useState } from "react";

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    console.log("Hu");

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-form__input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-form__button">Add todo</button>
    </form>
  );
}

export default TodoForm;
