import { GlobalStyle, ContentContainer } from "./global.styles";
import AddTodoForm from "./components/add-todo-form/add-todo-form.component";
import UndoAndFilter from "./components/undo-and-filter/undo-and-filter.component";
import TodosContainer from "./components/todos-container/todos-container.component.jsx";

/**
 * this function renders the whole application and displays it to user's screen
 * 
 * @returns {HTMLElement} our application
 */
function App() {
  return (
    <ContentContainer>
      <GlobalStyle/>
      <AddTodoForm/>
      <UndoAndFilter/>
      <TodosContainer/>
    </ContentContainer>
  );
}

export default App;
