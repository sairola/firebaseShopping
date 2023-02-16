import { async } from '@firebase/util';
import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from '../App';
import { addNewTask, getTask, updateTask, deleteTask } from '../firebase/taskController';

const task = {
title:"Este es el Título de la tarea",
description: "Esta es la descripción"

}


const TaskList = () => {

const [task, setTask] = useState( { title: "", description:"" });

const [tasks, setTasks] = useState([]);

const [mode, setMode] = useState("add");

const {user} = useContext(AppContext);

const createNewTask = async () => {
  console.log(task)
  await addNewTask(task)
  setTask({title: "", description:""})
  initializeTasks()
}

const updateExistingTask = async () =>  {
await updateTask(task);
setTask({title: "", description:""})
initializeTasks()
setMode("add")
}

const initializeTasks = () => {
   getTask()
 .then((t) => setTasks([...t]))
 .catch((e)  => console.error(e) )
}


const editTask = (id) => {
setMode('update')
const taskToEdit = tasks.find(t => t.id === id);
setTask({...taskToEdit})
}

const removeTask = async (id) => {
await deleteTask(id);
initializeTasks()
}


useEffect(() => {
initializeTasks()
}, []);



  return (
    <div>
      <h1 className='text-lg text-sky-700 font-semibold'>TÍTULO</h1>

      <div className=' flex flex-col gap-4'>

          <h2> Introduce una nueva tarea</h2>
          
          <input type="text" value={task.title}
          placeholder="Titulo"
          disabled={!user}
          className='border outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full'
          onChange={(e) => setTask({...task, title: e.target.value})}> 
          </input>

          <textarea 
          type="text" value={task.description}
          rows={3}
          disabled={!user}
          placeholder="Descripción de la tarea"
          className='border outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full'
          onChange={(e) => setTask({...task, description: e.target.value})}> 
          </textarea>

          <button className='bg-sky-400 text-white rounded shadow py-1
           hover:bg-sky-600 transition font-semibold disabled:bg-sky-150'
           disabled={!user}
           onClick={() => mode === "add" ? createNewTask() : updateExistingTask()}> 
           
           {mode === "add" ? "Añadir" : "Actualizar"} </button>

      </div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>

{tasks.map((task) => (
    
    <div key={task.id} className="rounded-lg border border-sky-300 p-4 flex flex-col gap-2">
    <h1 className="font-semibold">{task.title}</h1>
    <div className="border-t border-sky-300"></div>
    <p>{task.description}</p>    
        
<div className='flex justify-between'>  
<button className='bg-sky-400 text-white py-1 px-2 rounded 
hover:bg-sky-700 transition'
onClick={() => editTask(task.id)}
> Editar </button>
<button className='bg-red-600 text-white py-1 px-2 rounded 
hover:bg-red-800 transition'
onClick= { () => window.confirm("Seguro que deseas eliminar la tarea") && deleteTask(task.id)  }


>Eliminar</button>
</div>


    </div>
)   
)}
</div>


{!user && <p className='text-red-600'>Necesitas estar logueado para poder leer y modificar las tareas</p>}



   </div>
  )
}

export default TaskList
