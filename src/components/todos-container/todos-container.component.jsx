import { ContainerStyles, Title } from "./todos-container.styles.jsx";
import Todo from "../todo/todo.component.jsx";

import { useSelector } from "react-redux";

/**
 * returns and renders the todo list container
 * 
 * @returns {HTMLElement} todos list container
 */
export const TodosContainer = () => {
    const todosObject = useSelector(state => state.todos.value);
    
    const todos = Object.entries(todosObject);

    return (
        <ContainerStyles>
            <li><Title>Todo's</Title></li>
            
            {
                // mapping the todo's array and returning Todo's
                todos.map(todo => {
                    const id = todo[0];
                    const {name, status} = todo[1];

                    return <Todo key={id} id={id} name={name} status={status} />;
                })
            }

        </ContainerStyles>
    );
};

export default TodosContainer;