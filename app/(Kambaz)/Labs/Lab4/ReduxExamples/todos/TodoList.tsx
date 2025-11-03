import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


export default function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todosReducer);

    return (
        <div>
            <h2>Todo List</h2>
            <ul className="list-group w-50">
                <TodoForm />
                {todos.map((todo: { id: string; title: string }) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}
