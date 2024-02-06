import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
  return (
    <ListItem>
      <ListItemText
        primary={title}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default TodoItem;