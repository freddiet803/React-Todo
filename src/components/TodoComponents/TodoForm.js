import React from 'react';

import './Todo.css';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoListItem: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        if(this.state.todoListItem !== ''){
            this.props.addTask(this.state.todoListItem);
            this.setState({todoListItem: ''});
        }

    };

    handleClear = event =>{
        event.preventDefault();
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({
            todoListItem: event.target.value
        })
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}name='newTodo' type='text' value={this.state.todoListItem}/>
                <button className="formButtons" type='submit'>Add Todo</button>
                <button className="formButtons" onClick={this.props.clear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;