import React, { Component } from "react";
import "./style.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoItem">
        <li>{this.props.todo.name}</li>
        <button onClick={() => this.props.updateTodo(this.props.todo.id)}>Update</button>
        <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
      </div>
    );
  }
}
export default TodoItem;
