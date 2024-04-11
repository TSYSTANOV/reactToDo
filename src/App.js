import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { TodoForm } from "./components/ToDos/TodoForm";
import { TodoList } from "./components/ToDos/TodoList";
function App() {
  const [todos, setTodos] = React.useState([]);

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export { App };
