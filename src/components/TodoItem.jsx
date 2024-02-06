import React from 'react'

function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li key={id} >
              <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
              <label>{title}</label>
              <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
