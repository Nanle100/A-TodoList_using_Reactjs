import { useState } from "react"
import Todoitem from "./TodoList";
import Form from "./Form";
import Formlist from "./Formlist";
import Fixedheader from "./Fixedheader";



export default function Todo(){

    const [todos, setTodos] = useState([]);
   const todosCompleted = todos.filter((todo) => todo.done).length;
   const totalTodos = todos.length;

    return <div>
    <Fixedheader todosCompleted={todosCompleted} totalTodos={totalTodos}/>

   <Form setTodos={setTodos} todos={todos}/>

   <Formlist todos={todos} setTodos={setTodos}/>
   
    </div>
}