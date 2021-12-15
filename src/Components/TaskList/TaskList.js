import React from 'react'
import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
 console.log(props);
    return (
        <div>
            {props.produits.map(
                elt=>
                <TaskItem produit={elt} key={elt.id} handleDelete={props.handleDelete} complete={props.complete}/>)
            }
        </div>
    )
}

export default TaskList
