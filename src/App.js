import './App.css';
import Header from './MyComponents/Header'
import {Footer} from './MyComponents/Footer'
import {Todos} from './MyComponents/Todos'
import {AddTodo} from './MyComponents/AddTodo'
import React, { useState, useEffect } from 'react'


function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = ( todo ) => {
    
    setTodos( todos.filter( (e) => {
      return e!==todo
    }) )
    
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = ( title, desc ) => {
    let sno = todos.length ? todos[todos.length - 1].sno + 1 : 0
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    
  }
  let [todos, setTodos] = useState( initTodo )

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Header title="My Todos" searchBar={false} />
      <AddTodo addTodo={ addTodo } />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
