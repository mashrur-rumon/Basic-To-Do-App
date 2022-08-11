import React, { useState } from 'react'
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';
import { v4 as uuidv4 } from 'uuid';
// const dummyTodos = [
//     {
//         id: 1,
//         title : "todo title 1" ,
//         desc : " todo1 desc"
//     },
//     {
//         id: 2,
//         title : "todo title 2" ,
//         desc : " todo2 desc"
//     },
// ];



const Home = () => {

  const [todos, setTodos] = useState([]);
  const handleTodo = (todo) => {
    setTodos((prevTodos) => {
      return[...prevTodos, {id: uuidv4(), todo}]
    });
  };

  const handleRemoveTodo = (id) => {
    // const filteredTodos = todos.filter((todo) => todo.id !==id )  
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !==id);
      return filteredTodos;
    });
  };


  return (
    <div className={style.container}>
        <h1 style={{color : "black"}}>Todo App</h1>
        < NewTodo onAddTodo={handleTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home