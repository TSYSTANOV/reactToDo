import React from "react";
import styles from "./TodoForm.module.css";
import { Button } from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = React.useState("");
  function onSubmitHandler(event) {
    event.preventDefault();
    event.target.text.blur();
    if (text) {
      addTodo(text);
      setText("");
    }
  }
  return (
    <div className={styles.todoFormComtainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter new Todo"
          name="text"
          value={text}
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
export { TodoForm };
