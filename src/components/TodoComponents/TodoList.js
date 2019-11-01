// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css'

const  TodoList = props =>{

    return (
        <div className='todoList'>
            {props.doList.map(task => {
                return <Todo aTask={task} toggleComp={props.toggle}/>
                    
                
            })}
        </div>
    )
};

export default TodoList;