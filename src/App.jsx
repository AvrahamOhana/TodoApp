import React from "react";
import { useState, useEffect } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodosList from "./components/TodosList";
import { Box, Container, Typography, Paper } from "@mui/material";
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

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
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"  m={0} p={0}>
      <Container maxWidth="sm">
        <StyledPaper elevation={6} borderRadius={16}>
          <Box display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
              Todo List
            </Typography>
            <NewTodoForm addTodo={addTodo} />
            <Typography variant="h4" component="h2" sx={{ mb: 2 }}>Tasks</Typography>
            <TodosList todos={todos}  toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}

export default App;