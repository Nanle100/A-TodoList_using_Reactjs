import style from "./TodoList.module.css";

export default function Todoitem({item, todos, setTodos}){
    function handledelete(item){
        console.log(item + " was deleted");
        setTodos(todos.filter((todo) => todo !== item));
        
    }
function handleClick(name){
    

    setTodos(todos.map((todo)=> 
        todo.name === name ? {...todo, done: !todo.done}: todo
        ));
  
    
}
 const className = item.done ? style.completed: "";


    return <div className={style.list}>

    <h2 className={className}><span onClick={()=>handleClick(item.name)}>{item.name} </span></h2>
     <button onClick={() => handledelete(item)}>x</button>
    </div>
}