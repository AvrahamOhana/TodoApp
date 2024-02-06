import React from 'react'
import { useState } from 'react'

function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        

        if (newItem === "") return;
        
        addTodo(newItem)
    
        setNewItem("")
      }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
  )
}

export default NewTodoForm
