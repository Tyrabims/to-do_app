import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


export const TodoForm = () => {
  return (
//     <form>
//   <div className="form-group">
//     <h1>Tasks to be done</h1>
//     <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter a task"/>
//   </div>
//   <div className="form-group">
//     <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Summary"/>
//   </div>
//   <div className="d-grid gap-2">
//     <button className="btn btn-primary" type="button">Enter New Task</button>
//   </div>
// </form>
<>
<h1>Tasks to be done</h1>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="New task" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button className="btn btn-outline-secondary btn-info" type="button" id="button-addon2">Enter</button>
</div>
</> 
  )
}
