import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div>

      <h4>{todo.title}</h4>
      <p>{todo.desc}</p> 
  

      <button className="btn btn-sm btn-danger my-3" onClick={()=>{onDelete(todogit)}}>
        Delete
      </button>
    </div>
  );
};

export default Todo;