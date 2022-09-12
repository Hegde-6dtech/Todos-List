import "./App.css";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("this is delete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([]);
  
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
