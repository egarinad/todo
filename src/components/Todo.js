import React, { useState } from 'react';
//import TodoForm from "./TodoForm";
import {AiFillDelete} from 'react-icons/ai'
//import {BsPenFill} from 'react-icons/bs'



function Todo({todos, completeTodo, removeTodo, updateTodo}) {


    // const [edit, setEdit]= useState({
    //     id:null,
    //     value: ""
    // });

    return todos.map((todo, index) => (
       <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
       key= {index}
       >
           <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
           </div>
           <div className="icons">
               <AiFillDelete
                   onClick={()=>removeTodo(todo.id)}
                   className='delete-icon'
               />


               {/*<BsPenFill*/}
               {/*    onClick={()=>updateTodo(todo.id,todo.text)}*/}
               {/*    className='edit-icon'*/}
               {/*/>*/}


           </div>
       </div>
    ))
}

export default Todo