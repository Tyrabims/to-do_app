import React from 'react'

export interface Todo{
  todo :string;
  id: number;
  completeTask: boolean;
  //deleteTask: boolean;
}

// const Task = (props:Props) => {
//   return (
//     <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}
//     >
//         <h1>{props.taskName}</h1>
//         <button onClick={() => props.completeTask(props.id)}> Complete </button>
//         <button onClick={() =>props.deleteTask(props.id)}> X </button>
//     </div>
// );
//   }
//export default Task