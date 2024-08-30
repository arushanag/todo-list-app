import React from 'react'
import { useRef } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
    const {item, updateTodo, removeTodo, completeTodo } = props;

    const inputref = useRef(true);

    const changeFocus = () => {
      inputref.current.disabled = false;
      inputref.current.focus();
    };

    const update = (id,value,e) => {
      if(e.which === 13){
        updateTodo({ id, item: value });
        inputref.current.disabled = true;
      }
    };
    return (
        <li key={item.id} className='card'>
            <textarea 
                ref={inputref} 
                disabled={inputref} 
                defaultValue={item.item} 
                onKeyPress={(e)=> update(item.id, inputref.current.value, e )} 
            />
            <div className="btns">
              <button onClick={() => changeFocus()}><AiFillEdit /></button>
              {item.completed === false && (<button style={{color: "green"}} onClick={() => completeTodo(item.id)}><IoCheckmarkDoneSharp /></button>)}
              <button style={{color: "red"}} onClick={() => removeTodo(item.id) }><IoClose /></button>{" "}
            </div>
            {item.completed && <span className='completed'>done</span>}
        </li>
    );
};

export default TodoItem;