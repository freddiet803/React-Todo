import React from 'react';


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
                <button type='submit'>Add Todo</button>
                <button onClick={this.props.clear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;