import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {faTrash, faPenClip} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
            <div
                className="todo-row__text"
                key={todo.id}
                onClick={() => completeTodo(todo.id)}
            >
                {todo.text}
            </div>
            <div className="todo-row__icons icons">
                <button
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className={
                        todo.isComplete ? "icons__update complete" : "icons__update"
                    }
                >
                    <FontAwesomeIcon icon={faPenClip}/>
                </button>
                <button
                    onClick={() => removeTodo(todo.id)}
                    className={
                        todo.isComplete ? "icons__delete complete" : "icons__delete"
                    }
                >
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </div>
    ));
}

export default Todo;
