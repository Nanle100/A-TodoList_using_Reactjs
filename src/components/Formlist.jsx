import Todoitem from "./TodoList";
import style from "./TodoList.module.css";

export default function Formlist({todos, setTodos}){
    const sortedTodo = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done));
    return <div>
          {sortedTodo.map((item) => 
    // <h2>{items}</h2>
    < Todoitem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
    )}
    </div>
} 