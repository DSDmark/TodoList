import React, { useState } from 'react';
import todoContext from './Context';
import Data from "../Data";

interface Props {
    children: React.ReactNode;
}

// const TodoData: Todo[] ;

const TodoContext = (props: Props) => {
    const [state, setState] = useState<Todo[]>(Data);
    return (
        <>
            <todoContext.Provider value={[state, setState]}>{props.children}</todoContext.Provider>
        </>
    );
};

export default TodoContext;
