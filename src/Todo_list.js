import Reat,{useState} from 'react'
import "./Todo.css"


function Todo_list(){
    const [Todo, setTodo] = useState("")
    const [List, setList] = useState([])

    function handleAdd(){
        setList([...List, Todo])
        console.log(List);
        setTodo("")
    }

    function handleDelete(i){
        const updateList = List.filter((elem, id)=>{
            return i!=id;
        })
        setList(updateList)
    }



    return(
        <div className='container'>
        <h1>Todo-List</h1>
        <input type="text" placeholder="Add Activities" className="input" value={Todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button className="button" onClick={handleAdd} >Add</button>
        <div>
            {List!=[] && List.map((data, i)=>{
                return(
                    <div className='list'>
                        <p className='data'>{data}</p>
                        <h1 key={i}></h1>
                        <div className='delete' onClick={()=>handleDelete(i)}>❌</div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Todo_list;


