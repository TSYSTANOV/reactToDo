import { Todo } from "./Todo";
import { EmptyTodo } from "./EmptyTodo";
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <EmptyTodo />}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export { TodoList };
