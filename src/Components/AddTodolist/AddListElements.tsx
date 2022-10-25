import { Title } from "../Heading";

const AddListElements: (
	e: any,
	inputState: string,
	setInputState: React.Dispatch<React.SetStateAction<string>>,
	setState: React.Dispatch<React.SetStateAction<any>>,
) => void = (e, inputState, setInputState, setState) => {
	e.preventDefault();
	if (!inputState || inputState.replace(/\s+/g, '').length == 0) { alert("please enter text") }
	else {
		const newAddTodo = {
			id: new Date().getTime(),
			text: inputState.replace(/\s+/g, " ").trim(),
			isTodoDone: false,
		};
		setState((perv: Todo[]) => [...perv, newAddTodo]);
	}

	setInputState('');
	Title("TodoList | Adding 👌");
};

export default AddListElements;
