import { useState } from "react";
import style from "./form.module.css";

export default function Form({setTodos, todos}){
    const [todo, setTodo] = useState({name:"", done:false})
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        // setTodos({name: "", done: false})
    }
    return   <form class={style.todoForm} onSubmit={handleSubmit}>
        <div class={style.inputContainer}>
        <input class={style.myInput} placeholder="Enter your todo item..." onChange={(e) => setTodo({name: e.target.value, done: false})} value={todo.name} type="text"/>
        <button class={style.myButton} type="submit">Add</button>
        </div>
  
</form>
}