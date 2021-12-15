import React from 'react'
import './TaskItem.css'

const TaskItem = ({produit,handleDelete,complete}) => {

    return (
        <div className='task'>
           <p className={produit.isDone?"barre":null}>{produit.task}</p>
           <button style={{marginRight:30}} onClick={()=>complete(produit.id)}>{produit.isDone?"Undo":"Complete"}</button>
            <button onClick={()=>handleDelete(produit.id)}>Delete</button>
        </div>
    )
}

export default TaskItem
