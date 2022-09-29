import { UndoAndFilterContainer, Undo, UndoImage, Tooltip, SelectorGroup } from "./undo-and-filter.styles";
import undoArrow from "../../assets/undo-arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { removeLastTodo, setFilterStatus } from "../../redux/todo/todo-slice";
import { TODO_FILTERS } from "../../redux/todo/todo-slice";

const UndoAndFilter = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const hasTodos = (todos.length > 0);
    const filters = Object.values(TODO_FILTERS);

    /**
     * removes the last object in the todo state
     * 
     * @param {Event} e 
     */
    const undoClickHandler = e => {
        e.preventDefault();
        dispatch(removeLastTodo());
    };

    /**
     * sets a new filter value
     * 
     * @param {Event} e 
     */
    const setNewFilter = e => {
        const newFilter = e.target.value;
        dispatch(setFilterStatus(newFilter));
    }

    return (
        <UndoAndFilterContainer>
                {/* only show undo if todos are available in the state */}
                {
                    hasTodos ?
                        <Undo onClick={undoClickHandler}><UndoImage src={undoArrow} alt="undo-arrow"/><Tooltip>Undo Add To-do</Tooltip></Undo> :
                        null
                }
                
                <SelectorGroup>
                    <label htmlFor="statuses">pick todos to show by status:</label>
                    <select name="statuses" id="statuses" onChange={setNewFilter}>
                        {
                            filters.map(status => <option key={status} value={status}>{status}</option>)
                        }
                    </select>
                </SelectorGroup>
        </UndoAndFilterContainer>
    )
}

export default UndoAndFilter;