import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const [todoList, setTodoList] = useState([{}])
  const [desc, setDesc] = useState("Add Your Task Here")
  // Read all todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  });

  // Post a todo
  const addTodoHandler = () => {
    if(desc.length !== 0 && desc !== "Add Your Task Here"){
      axios.post('http://localhost:8000/api/todo/', { 'description': desc })
      .then(res => {console.log(res);

    });
    }
  }

  return (
     <form className = "row mt-5">
       <h1 className = "text-center heading mb  -3 p-2 rounded text-white">Todo App</h1>
       <div className="col-6 text-center">
       <div className="App list-group-item  mx-auto p-3" style={{"width":"600px","height":"auto", "MarginTop":"15px"}} >
      <h1 className="card text-white main mb-1" styleName="max-width: 20rem;">Add Todo</h1>
      <div className="card-body">
      <span className="card-text"> 
        <input className="mb-2 form-control desIn" type="input" onChange={event  => setDesc(event.target.value)}   
        placeholder= "Add Your Task Here"/>
      <button type="submit" className="btn btn-outline-primary mx-2 m-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  
      onClick={addTodoHandler}>Add Task</button>
      </span>
      </div>
    </div>
       </div>
       <div  className="col-6 text-center list-group-item mx-auto p-3" style={{"width":"600px","height":"auto", "MarginTop":"15px"}} >
       <h3 className="card text-white main mb-3 p-3">Your Tasks</h3>
      <div>
      <TodoView todoList={todoList} />
      </div>
       </div>
     </form>
  );
}

export default App;