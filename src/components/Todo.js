// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// function Todo({task, deleteTodo, editTodo, toggleComplete}) {
//   return (
//     <div className="Todo">
//         <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={()=> toggleComplete(task.id)} >{task.task}</p>
//         <div>
//         <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
//         <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
//         </div>
//     </div>
//   )
// }
// export default Todo


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import React from 'react'

// const Todo = ({task,editTodo,deleteTodo,toggleComplete}) => {
//   return (
//     <div className='Todo'>
//       <p className={`${task.completed?'completed':'incompleted'}`} onClick={()=>toggleComplete(task.id)}>{task.task} </p>
// <div>

// <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
// <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=>deleteTodo(task.id)}/>

// </div>
//     </div>
//   )
// }

// export default Todo


import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task,editTodo,deleteTodo,toggleComplete}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed?'completed':'incompleted'}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
<div >
      <FontAwesomeIcon className='edit-icon' icon={faPenToSquare}  onClick={()=>editTodo(task.id)}/>

        <FontAwesomeIcon className='delete-icon' icon={faTrash}  onClick={()=>deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo
