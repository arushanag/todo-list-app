//Import libraries and components
import React from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  // Destructure props to get individual functions and item
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputref = useRef(true);

  // Function to enable the input field for editing
  const changeFocus = () => {
    inputref.current.disabled = false;
    inputref.current.focus();
  };

  // Function to update the todo item when 'Enter' key is pressed
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputref.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      {/* Textarea for displaying and editing the todo items */}
      <textarea
        ref={inputref}
        disabled={inputref}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputref.current.value, e)}
      />

      {/* Buttons for editing, completing and removing the todo */}
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          <AiFillEdit />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          <IoClose />
        </motion.button>{" "}
      </div>

      {/* Display 'done' if the todo is completed */}
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

//Connect the TodoItems components to the Redux store
export default TodoItem;