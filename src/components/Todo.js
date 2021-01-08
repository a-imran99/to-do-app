import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {BsFullscreenExit} from 'react-icons/bs'
import { TiEdit } from "react-icons/ti";
function Todo({todos, completeTodo, removeTodo, updatedTodo}) {

    const [edit, setEdit] = useState({
        id : null,
        value :''
    })

    const submitUpdate = value => {
        updatedTodo(edit.id,value);
        setEdit({
            id :null,
            value : ''
        });

    }

    if(edit.id) {
        // return (
        //   <form className="todo-form">
        //     <input
        //       type="text"
        //       placeholder="Edit"
        //       edit={edit.value}
        //       name="text"
        //       className="todo-input"
        //       onSubmit={submitUpdate}
        //     ></input>

        //     <button className="todo-button"> edit Todo </button>
        //   </form>
        // );
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <BsFullscreenExit onClick={() => removeTodo(todo.id)} className="delete-icon"/>
          <TiEdit onClick={() => setEdit ({ id : todo.id, value: todo.text})} className="edit-icon"/>
        </div>
      </div>
    ));
}

export default Todo
