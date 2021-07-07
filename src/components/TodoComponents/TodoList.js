// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css'

const  TodoList = props =>{
let count = 0;
    return (
        <div className='todoList'>
            {props.doList.map(task => {
                {count++}
                return ( <Todo aTask={task} toggleComp={props.toggle} count={count}/>)
                    
                
            })}
        </div>
    )
};

export default TodoList;