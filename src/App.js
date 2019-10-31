import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { convertPatternGroupsToTasks } from 'fast-glob/out/managers/tasks';


const ourData = [
  {task: 'Organize Garage',
  id: 1,
  completed: false}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      theTodoList: ourData
    }
  }

  addTodoListItem = item =>{
    this.setState({
      theTodoList: [...this.state.theTodoList,{task: item, id: Date.now(), completed: false}]
    });
  }

  clearCompleted = () => {
    this.setState({
      theTodoList: this.state.theTodoList.filter(task => {
        return !task.completed;
      })

    });
  }

  toggleCompleted = (taskId) => {
    this.setState({
      theTodoList: this.state.theTodoList.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList doList={this.state.theTodoList}/>
      </div>
    );
  }
}

export default App;
