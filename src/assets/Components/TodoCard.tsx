//This component will contain
//1. a body for the title of the todo message
//2. a button for deleting the todo array
//3. a button to edit this todo array

import type { TodoCardFunctions } from "./TodoApp";


export default function TodoCard({
    id,
    checked,
    title,
    handleTodoCheck,
    handleDeleteTodo,
    handleEditTodo,
}: TodoCardFunctions) {
    return (
    <div className="TodoCard">
        <div>
            <span style={
            checked
            ?{textDecoration: "line-through"}
            :{textDecoration: "none"}
            }>{title}</span>
        </div>
        <input type="checkbox"
        name="checked"
        id="checked"
        checked={checked}
        onChange={(e) => handleTodoCheck(e, id)}
        />
        <div>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
        <button onClick={() => handleEditTodo(id)}>Edit</button>
        </div>
    </div>
    );
}