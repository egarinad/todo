import React, {useEffect, useRef, useState} from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef= useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  })


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input.trim(),
    });

    console.log("Hu");

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Write something..."
            value={input}
            name="text"
            className="todo-form__input update"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-form__button update">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Write something..."
            value={input}
            name="text"
            className="todo-form__input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-form__button">Add todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
