import React, { useState, useEffect } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const initialTodos = [
  { id: 1, text: "Take out trash", completed: false },
  { id: 2, text: "Complete Homework", completed: true },
  { id: 3, text: "Make bed", completed: false },
  { id: 4, text: "Brush teeth", completed: true },
];
const fetchTodos = async (setTodos) => {
  try {
    const response = await fetch("https://todo-app-backend-n0mo.onrender.com/");
    const data = await response.json();
    setTodos(data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [currentlyEditingId, setCurrentlyEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Fetch todos when component mounts
  useEffect(() => {
    fetchTodos(setTodos);
  }, []);

  const handleInputChange = (e) => setNewTodo(e.target.value);

  const handleAddTodo = async () => {
    if (newTodo.trim() === "") return;
    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    try {
      const response = await fetch(
        "https://todo-app-backend-n0mo.onrender.com/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodoItem), // Only send text, no _id or completed
        }
      );
      const data = await response.json();
      setTodos([...todos, data]); // Update state with new todo from the backend
      setNewTodo(""); // Reset input
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, currentText) => {
    setCurrentlyEditingId(id);
    setEditText(currentText);
  };

  const cancelEditing = () => {
    setCurrentlyEditingId(null);
    setEditText("");
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    cancelEditing();
  };

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <TextField
          fullWidth
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <Button variant="contained" onClick={handleAddTodo} sx={{ mt: 1 }}>
          Add Todo
        </Button>
      </div>

      {todos.map((todo) => (
        <Card key={todo.id} sx={{ mb: 2 }}>
          <CardContent>
            {currentlyEditingId === todo.id ? (
              <>
                <TextField
                  fullWidth
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <Button onClick={() => saveEdit(todo.id)} sx={{ mt: 1, mr: 1 }}>
                  Save
                </Button>
                <Button onClick={cancelEditing} sx={{ mt: 1 }}>
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h6">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={{ marginRight: "0.5rem" }}
                  />
                  {todo.text}
                </Typography>
                <Button
                  onClick={() => startEditing(todo.id, todo.text)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Edit
                </Button>
                <Button onClick={() => removeTodo(todo.id)} sx={{ mt: 1 }}>
                  Remove
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TodoList;
