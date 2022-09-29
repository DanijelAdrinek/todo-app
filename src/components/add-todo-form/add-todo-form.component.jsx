import { Form, TextInput, SubmitInput } from "./add-todo-form.styles";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/todo-slice.js";

/**
 * renders a form for adding todo items
 * 
 * @returns {HTMLFormElement} add todo form
 */
const AddTodoForm = () => {
    const [todoName, setTodoName] = useState('');
    const dispatch = useDispatch();

    /**
     * sets the value to the value of the input field
     * 
     * @param {Event} inputEvent 
     */
    const onChangeHandler = (inputEvent) => {
        const inputValue = inputEvent.target.value;
        setTodoName(inputValue);
    };

    /**
     * handles the form submit, and sets the value of the input field to an empty string
     * 
     * @param {Event} e 
     */
    const formSubmitHandler = e => {
        e.preventDefault();
        
        dispatch(addTodo(todoName));
        setTodoName('');
    };


    return (
        <Form onSubmit={formSubmitHandler}>
            <TextInput required type="text" name="todo" placeholder="To-do" value={todoName} onChange={onChangeHandler}/>
            <SubmitInput type="submit" value="Add To-do"/>
        </Form>
    );
}

export default AddTodoForm;