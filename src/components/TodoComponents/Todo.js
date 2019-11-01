import React from 'react';
import './Todo.css'


const Todo = props => {

    const handleClick = ()=>{
        props.toggleComp(props.aTask.id);
        
    }

    return (
        
        <div onClick={handleClick} className={`todo${props.aTask.completed ? ' completedTask' : ''}`}>
            <p>{props.count}{props.aTask.task}</p>
        </div>
    )
}

export default Todo;