import React, { FC, useContext } from 'react';
import { todoContext } from '../../Context';
import { ToggleTodo } from './ToggleTodo';
import { DeleteTodolist } from '../index';

interface Props {
    Data: Todo;
}
const ShowList: FC<Props> = ({ Data }) => {
    const [, setState] = useContext<any>(todoContext);
    return (
        <>
            <ul>
                <li style={{ listStyle: 'none' }}>
                    <DeleteTodolist id={Data.id} />
                    <label htmlFor="textInput">
                        <span
                            role="img"
                            aria-label="emojis"
                            style={{ fontSize: '2rem' }}
                            onClick={() => ToggleTodo(Data, setState)}
                        >
                            {Data.isTodoDone ? '👻' : '💀'}
                        </span>
                        <span
                            style={{
                                fontSize: '1.5rem',
                                textDecoration: Data.isTodoDone ? 'line-through' : '',
                            }}
                            onClick={() => ToggleTodo(Data, setState)}
                        >
                            {Data.text}
                        </span>
                    </label>
                </li>
            </ul>
        </>
    );
};

export default ShowList;
