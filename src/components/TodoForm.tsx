import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


interface Props {
  todo: string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleNewtask: (event:React.FormEvent<EventTarget>) => void;
}

export const TodoForm = ({todo, setTodo, handleNewtask}: Props) => {
  return (
<>
<h1>Tasks to be done</h1>
<div className="input-group mb-3">
  <input type="text" 
  value={todo} 
  onChange={(event) =>setTodo(event.target.value)} 
  className="form-control" 
  placeholder="New task" />
  <button onSubmit={handleNewtask} className="btn btn-outline-secondary btn-info" type="button" id="button-addon2">Enter</button>
</div>
</> 
  )
}
