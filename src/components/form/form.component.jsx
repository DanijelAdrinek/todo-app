import { Form, TextInputAndUndoContainer, TextInput, Undo, UndoImage, Tooltip, SubmitInput } from "./form.styles";
import undoArrow from "../../assets/undo-arrow.png";

/**
 * renders a form for adding todo items
 * 
 * @returns {HTMLFormElement} add todo form
 */
const AddTodoForm = () => {
    return (
        <Form>
            <TextInputAndUndoContainer>
                <TextInput type="text" name="todo" placeholder="Todo"/>
                <Undo><UndoImage src={undoArrow} alt="undo-arrow"/><Tooltip>Undo Add Todo</Tooltip></Undo>
            </TextInputAndUndoContainer>
            <SubmitInput type="submit" value="Add todo"/>
        </Form>
    );
}

export default AddTodoForm;