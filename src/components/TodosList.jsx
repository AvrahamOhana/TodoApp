import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TodoItem from "./TodoItem";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system';




function TodosList({ todos, toggleTodo, deleteTodo }) {
  return (
    <List>
      {todos.length === 0 && (
        <ListItem>
          <Typography component="p">No tasks yet</Typography>
        </ListItem>
      )}
      {todos.map((todo) => {
        return (
            <>
            <TodoItem
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
            <Divider />
            </>
        );
      })}
    </List>
  );
}

export default TodosList;
