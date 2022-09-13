import "./App.css";
import React from "react";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";
import About from "./MyComponent/About";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("this is delete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
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

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path="/" element={<AddTodo addTodo={addTodo} />}></Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos todos={todos} onDelete={onDelete} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
