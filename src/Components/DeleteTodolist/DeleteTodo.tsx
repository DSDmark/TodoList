import {Title} from "../Heading";
const DeleteTodo = (id: string, setState: React.Dispatch<React.SetStateAction<Todo>>) => {
    setState((perv: Todo) => perv.filter((e: Todo) => e.id !== id));
    Title("TodoList | Deleting 📥")
};

export default DeleteTodo;
