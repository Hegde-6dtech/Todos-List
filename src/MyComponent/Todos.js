import React from "react";
import Todo from "./Todo";

const Todos = (props) => {

  let todosStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <div className="container" style={todosStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default Todos;
