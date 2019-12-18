import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getstyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }

        return {
            backgroundColor: '#f4f4f4',
            padding: '15px',
            borderBottom: '2px #cccc dotted ',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


  render() {
    const {id,title} = this.props.todo;
    return (
      <div style = {this.getstyle()}>
        <p>
        <input type ="checkbox" onClick={this.props.markComplete.bind(this, id)}/>{" "}
        {this.props.todo.title}
        <button onClick = {this.props.delTodo.bind(this, id)} style = {btnstyle}>x</button>
        </p>

      </div>
    )
  }
}

//proptypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemstyle = {
    backgroundColor: '#ADD8E6'
}

const btnstyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"

}

export default Todoitem
