//Import CSS and Components
import './css/main.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';
import { motion } from "framer-motion";


//Main App Component
function App() {
  return (
    <div className="App">
      {/* Animated heading */}
      <motion.h1
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      whileHover={{ scale: 1.1 }}>Todo List App
      </motion.h1>

      {/* Animated for the Todos and DisplayTodos components */}
      <motion.div
        initial={{ y: 1000}}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration:1 }}
      >
      <Todos/>
      <DisplayTodos/>
      </motion.div>
    </div>
  );
}

//Export the App components
export default App;
