export declare global {    
 interface Todo {
    [x: string]: any;
    id: string;
    text: string;
    isTodoDone: boolean;
}
}