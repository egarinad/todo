import React, {useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if(savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        if(!todo.text) return;

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updateTodos);
    };

    const removeTodo = (id) => {
        const removeList = [...todos].filter((todo) => todo.id !== id);

        setTodos(removeList);
    };

    const updateTodo = (id, newValue) => {
        newValue.text = newValue.text.trim();
        if(!newValue.text) return;

        setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
    };

    return (
        <div className="wrapper">
            <div className="container">
                <TodoForm onSubmit={addTodo}/>
                <Todo
                    todos={todos}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            </div>
        </div>
    );
}

export default TodoList;
