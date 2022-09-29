import { ContainerStyles, Title } from "./todos-container.styles.jsx";
import Todo from "../todo/todo.component.jsx";

import { useSelector } from "react-redux";
import { TODO_FILTERS } from "../../redux/todo/todo-slice.js";

/**
 * returns and renders the todo list container
 * 
 * @returns {HTMLElement} todos list container
 */
export const TodosContainer = () => {
    const todoState = useSelector(state => state.todos);
    const filter = todoState.filter;
    const allTodos = todoState.todos;
    
    const filterTodosByStatus = () => {
        if(filter !== TODO_FILTERS.all) {
            return allTodos.filter(todo => todo.status === filter);
        };
        return allTodos;
    };
    
    const filteredTodos = filterTodosByStatus();

    return (
        <ContainerStyles>
            <li><Title>To-do's</Title></li>
            
            {
                // mapping the todo's array and returning Todo's
                filteredTodos.map(todo => {
                    const {id, name, status} = todo;

                    return <Todo key={id} id={id} name={name} status={status} />;
                })
            }

        </ContainerStyles>
    );
};

export default TodosContainer;