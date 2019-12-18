import React, { Component } from 'react';
import Todoitem from'./Todoitem';
import PropTypes from 'prop-types';
/* The reason we make a new js file is becuase todos is a component which is a seperate function and that helps us to keep things neat and tidy with different file representing different components. */

class Todos extends Component {

  render() {/* the render() is a function and react combines javascript and html together in one file.*/
    // console.log(this.props.Todos)
    return (
        this.props.Todos.map((todo) => (<Todoitem key={todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}/>))
    );
  }
}
Todos.propTypes = {
    Todos: PropTypes.array.isRequired
}

export default Todos;