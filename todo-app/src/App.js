import './css/main.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <h1>Todo List App</h1>
      <Todos/>
      <DisplayTodos/>
    </div>
  );
}

export default App;
