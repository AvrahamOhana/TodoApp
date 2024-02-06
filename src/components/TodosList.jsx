import React from "react";
import TodoItem from "./TodoItem";

function TodosList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && <li>No tasks yet</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodosList;
