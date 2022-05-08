import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./components/TodoList";
import "./sass/todoList.scss"

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);


