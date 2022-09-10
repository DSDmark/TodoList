import React, { FC } from 'react';
import { TodoItemsList, AddTodo, Heading } from './Components';
import { TodoContext } from './Context';
import './style.css';

document.title = "Todolist with React⚝";

export const App: FC = () => {
    return (
        <>
            <TodoContext>
                <pre>
                    <Heading />
                    <AddTodo />
                    <TodoItemsList />
                </pre>
            </TodoContext>
        </>
    );
};

