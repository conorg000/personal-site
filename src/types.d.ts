// Interface for todo prop
interface Todo {
    text: string;
    link: string;
    complete: boolean;
}

// Type for toggling function
type ToggleTodo = (selectedTodo : Todo) => void;