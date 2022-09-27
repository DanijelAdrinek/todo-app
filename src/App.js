import { GlobalStyle, ContentContainer } from "./global.styles";
import AddTodoForm from "./components/form/form.component";
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
      <TodosContainer/>
    </ContentContainer>
  );
}

export default App;
