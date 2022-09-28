import { Form, TextInputAndUndoContainer, TextInput, Undo, UndoImage, Tooltip, SubmitInput } from "./form.styles";
import undoArrow from "../../assets/undo-arrow.png";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../redux/todo/todo-slice.js";
import { idGenerator } from "../../utils/id-generator/id-generator";

import { TODO_STATUSES } from "../../redux/todo/todo-slice.js";

/**
 * renders a form for adding todo items
 * 
 * @returns {HTMLFormElement} add todo form
 */
const AddTodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.value);
    const hasTodos = (Object.keys(todos).length !== 0);

    /**
     * sets the value to the value of the input field
     * 
     * @param {Event} inputEvent 
     */
    const onChangeHandler = (inputEvent) => {
        const inputValue = inputEvent.target.value;
        setValue(inputValue);
    };

    const formValidator = () => {
        if(value.trim().length === 0) {
            return false;
        }

        return true;
    };

    /**
     * handles the form submit, and sets the value of the input field to an empty string
     * 
     * @param {Event} e 
     */
    const formSubmitHandler = e => {
        e.preventDefault();
        const isValid = formValidator();

        if(isValid) {
            const id = idGenerator();
            const name = value;
            const status = TODO_STATUSES.todo;

            const todo = {id, name, status};
            dispatch(addTodo(todo));
            setValue('');
        } else {
            alert('input field cannot be empty!');
        }
    };

    /**
     * removes the last object in the todo state
     * 
     * @param {Event} e 
     */
    const undoClickHandler = e => {
        e.preventDefault();

        const IDs = Object.keys(todos);
        const lastID = IDs.pop();
        dispatch(removeTodo(lastID));
    }

    return (
        <Form onSubmit={formSubmitHandler}>
            <TextInputAndUndoContainer>
                <TextInput type="text" name="todo" placeholder="Todo" value={value} onChange={onChangeHandler}/>
                
                {/* only show undo if todos are available in the state */}
                {
                    hasTodos ?
                        <Undo onClick={undoClickHandler}><UndoImage src={undoArrow} alt="undo-arrow"/><Tooltip>Undo Add Todo</Tooltip></Undo> :
                        null
                
                }

            </TextInputAndUndoContainer>
            <SubmitInput type="submit" value="Add todo"/>
        </Form>
    );
}

export default AddTodoForm;