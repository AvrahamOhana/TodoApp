import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem === "") return;

        addTodo(newItem);

        setNewItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="center" gap={2}>
                <TextField
                    label="New Item"
                    variant="outlined"
                    size="small"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <Button variant="contained" color="primary" size="medium" type="submit">
                    Add
                </Button>
            </Box>
        </form>
    );
}

export default NewTodoForm;