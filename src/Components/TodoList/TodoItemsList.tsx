import { FC, useContext } from 'react';
import { todoContext } from '../../Context';
import ShowList from './ShowList';


export const TodoItemsList: FC = () => {
    const [state] = useContext<Todo[]>(todoContext);
    return (
        <>
            {state.map((Data: Todo) => (
                <ShowList key={Data.id} Data={Data} />
            ))}
        </>
    );
};
