import React,{use, useState} from "react";

function ToDoList(){
    //state && event handler
    const[todos,setTodos] = useState(['Learn React','Build a Project']);
    const [newTodo,setNewTodo]=useState('');

    const handleInputChange=(event)=>{
        setNewTodo(event.target.value);
    };
    const addTodo = ()=>{
        if(newTodo.trim()!==''){
            setTodos(prevTodos => [...prevTodos,newTodo]);
            setNewTodo('');
        }
    };
    const removeTodo = (index)=>{
        setTodos(prevTodos => prevTodos.filter((_,i)=>i!==index));
    };
    return(
        // JSX
        <div>
            <h2>My-Todo List</h2>
            <input type="text" value={newTodo} onChange={handleInputChange} placeholder="
            Enter new Todo" />
            <button onClick={addTodo}
                style={{
                padding: '5px 10px',
                backgroundColor: '#478ae2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.8em'
                }}>
                Add</button>
            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}> 
                        {todo} 
                        <button onClick={()=>removeTodo(index)}
                                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8em'
                            }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ToDoList;