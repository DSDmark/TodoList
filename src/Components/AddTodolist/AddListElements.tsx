import {Title} from "../Heading";

const AddListElements: (
    e: any,
    inputState: string,
    setInputState: React.Dispatch<React.SetStateAction<string>>,
    setState: React.Dispatch<React.SetStateAction<any>>,
) => void = (e, inputState, setInputState, setState) => {
    e.preventDefault();
    const newAddTodo = {
        id: new Date().getTime(),
        text: inputState,
        isTodoDone: false,
    };

    setState((perv: Todo[]) => [...perv, newAddTodo]);
    setInputState('');
    Title("TodoList | Adding 👌");
};

export default AddListElements;
