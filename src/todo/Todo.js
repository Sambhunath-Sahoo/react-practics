import React, { useEffect, useState } from 'react'
import SingleTodo from './SingleTodo';

function Todo() {
    const [todoList, setTodoList] = useState(["hello", "hey", "okay"]);
    const [newTodo, setNewTodo] = useState("");

    function addTodo(e) {

    }

    return (
        <div>
            <input type="text"  onClick={addTodo()}/>
           {todoList.map( todo => (
               <SingleTodo todo={todo}/>
           ))}
        </div>
    )
}

export default Todo
