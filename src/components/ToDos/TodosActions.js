import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import { Button } from "../UI/Button";
function TodosActions({ resetTodo, deleteCompletedTodo, completedTososExist }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiDeleteBin2Line />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodo}
        disabled={completedTososExist}
      >
        <RiRefreshLine />
      </Button>
    </>
  );
}
export { TodosActions };
