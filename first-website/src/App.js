import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Component/Todos';
import './App.css';
import Header from './Component/layout/Header'
import AddTodo from './Component/AddTodo';
import About from './Component/pages/About';
import uuid from 'uuid';


// TIME:1:22:57 

class App extends Component {

  state = {
    Todos:[
      {
      id: uuid.v4(),
      title: 'Go to class at 2pm',
      completed: false
      },
      {id: uuid.v4(),
      title: 'go MeAt JoSh AnD SaY hI',
      completed: false
    }
    ]
  }
//toggle complete or not.
  markComplete = (id) =>{
    this.setState({Todos: this.state.Todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
}

//delete Todo
delTodo = (id) =>{
  this.setState({Todos: [...this.state.Todos.filter(todo =>todo.id !== id)]});
}

//Add Todo
addTodo = (title) =>{
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ Todos: [...this.state.Todos, newTodo] });

}


  render() {/* the render() is a function and react combines javascript and html together in one file.*/

    return (
      <Router>
      <div className="App">
        <div className = "container">
          <Header/>
          <Route exact path = "/" render ={ props => (
          <React.Fragment>
          <AddTodo addTodo = {this.addTodo}/>
          <Todos Todos ={this.state.Todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>{/*The <Todos/> just brings the component into our main app*/}
          </React.Fragment>
          )}/>
          <Route path="/about" component ={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;