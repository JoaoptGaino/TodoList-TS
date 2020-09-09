interface Todo {
    text: string;
    complete: boolean;
}

type handleTodo = (selectedTodo: Todo) => void;