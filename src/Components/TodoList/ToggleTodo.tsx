import {Title} from "../Heading";
export const ToggleTodo = (Data:any, setState: Function) => {
    setState((perv: Todo) => perv.map((e: Todo) => (e.id === Data.id ? { ...e, isTodoDone: !e.isTodoDone } : e)));
    Title(Data.isTodoDone?"Todolist is Done ✅":"Todolist isn't Done ❌")
};
