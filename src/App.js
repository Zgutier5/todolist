import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    tasks: [],
    inputText: ''
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => this.setState({tasks: data}))
  }

  handleTextChange = (e) => {
    e.preventDefault();
    const newState = {...this.state};
    newState.inputText = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newState = {...this.state};
    newState.tasks.push({
      id: Date.now().toString(),
      title: newState.inputText
    });

    newState.inputText = '';
    this.setState(newState);
  };

  handleDeleteTask = (index) => {
    const newState = {...this.state};
    newState.tasks.splice(index, 1);
    this.setState(newState);
  };

  listTasks = () => {
    return this.state.tasks.map((task, index) => {
      return <Task 
              taskName={task.title} 
              onDelete={()=> {this.handleDeleteTask()}}
              key={task.index} 
              />
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField value={this.state.inputText} onChange={this.handleTextChange} />
            <Button onClick={this.handleSubmit} variant="contained" component="span">List</Button>
          </form>
        </div>
        {this.listTasks()}
      </div>
    );
  }
}


export default App;
