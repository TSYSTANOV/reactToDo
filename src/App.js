import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { TodoForm } from "./components/ToDos/TodoForm";
import { TodoList } from "./components/ToDos/TodoList";
import { TodosActions } from "./components/ToDos/TodosActions";
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
  function toggleTodoHanler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }
  function resetTodoHandler() {
    setTodos([]);
  }
  function deleteComplitedTodosHandler() {
    setTodos(
      todos.filter((todo) => {
        return !todo.isCompleted;
      })
    );
  }
  const competedTodosCount = todos.filter((todo) => {
    return todo.isCompleted;
  }).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTososExist={!Boolean(competedTodosCount)}
          resetTodo={resetTodoHandler}
          deleteCompletedTodo={deleteComplitedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHanler}
      />
      {competedTodosCount > 0 && (
        <h2>
          You have a {competedTodosCount} completed{" "}
          {competedTodosCount > 1 ? "ToDos" : "ToDo"}
        </h2>
      )}
    </div>
  );
}

export { App };
