import axios from 'axios'
import React from 'react'

function TodoItem(props) {
    const deleteTodoHandler = (description) => {
    axios.delete(`http://localhost:8000/api/todo/${description}`)
        .then(res => console.log(res.data)) }
  
    return (
        <div>
            <p>
                <span style={{ fontWeight: 'bold, underline',fontSize:'30px' }}>{props.todo.description}  </span>  
                <button onClick={() => deleteTodoHandler(props.todo.description)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',"font-weight":"bold"}}>Delete</button>
                <hr></hr>
            </p>
        </div>
    )
}

export default TodoItem;