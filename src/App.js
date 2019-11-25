import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {
  state = {
    todos: [
      {id: 1, title: '1th todo', completed: false},
      {id: 2, title: '2th todo', completed: true},
    ]
  }

  render() {
    return (
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" />
            <label>Todo name</label>
          </div>

          <TodoList todos={this.state.todos} />
      </div>
    );
  }
}