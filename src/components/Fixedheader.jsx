import style from "./Fixedheader.module.css";

export default function Fixedheader({todosCompleted, totalTodos}){
    return <div className={style.Head}>

        <span>Todos completed:{todosCompleted}</span><br></br>
        <span> Total Todos:{totalTodos}</span>
    
    </div>
}