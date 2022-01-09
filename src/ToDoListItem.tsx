import React from 'react';

// Interface for todo prop
// now kept in Types.d.ts
/*
interface Todo {
    text: string;
    complete: boolean;
}
*/

// Interface for props
// Todo is one prop in this component
// Toggletodo is another prop
interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

// Component for a single ToDo List Item
// Input is props of type Props
export const ToDoListItem : React.FC<Props> = ({todo, toggleTodo}) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.complete} onClick={() => {toggleTodo(todo);}}/>
                {todo.link.length > 0 ?
                <a href={todo.link} rel="noreferrer" target="_blank">{todo.text}</a> : 
                <a>{todo.text}</a>
                }
            </label>
        </li>
    );
}