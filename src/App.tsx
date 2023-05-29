import { useState } from 'react'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { TodoForm } from './components/TodoForm'
import { Todo } from './components/Task';


function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Todo[]>([]);

const handleNewtask = (event: React.FormEvent<EventTarget>) => {
  event.preventDefault();
  if (todo) {
    setTasks([...tasks,{id: Date.now(), todo, completeTask:false }])
    setTodo("");
  }
};

//console.log(tasks);
  return (
<div>
  <TodoForm 
  todo={todo} 
  setTodo={setTodo} 
  handleNewtask={handleNewtask} 
  {...tasks.map((t) => (
    <li>{t.todo}</li>
  ))}/>
  
</div>
  )
}

export default App;