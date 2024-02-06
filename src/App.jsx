import React from "react";
import { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";
import { useEffect } from "react";

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null ) return []
    return JSON.parse(localValue)
  });


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id ) {
          return {...todo, completed}
        }
        return todo
      })

    })
  }


function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
    })
  }



  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <h2>Tasks</h2>
      <TodosList todos={todos}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
