import { ContainerStyles, Title } from "./todos-container.styles.jsx";
import Todo from "../todo/todo.component.jsx";

/**
 * returns and renders the todo list container
 * 
 * @returns {HTMLElement} todos list container
 */
export const TodosContainer = () => {
    return (
        <ContainerStyles>
            <li><Title>Todo's</Title></li>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </ContainerStyles>
    );
};

export default TodosContainer;