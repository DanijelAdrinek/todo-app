import { TodoStyled, RemoveTodo } from "./todo.styles";

/**
 * returns and renders Todo element to the screen
 * 
 * @returns {HTMLElement} todo
 */
const Todo = () => {
    return (
        <TodoStyled>
            Peri sudje
            <RemoveTodo>
                &#10005;
            </RemoveTodo>
        </TodoStyled>
    );
}

export default Todo;