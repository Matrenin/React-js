import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: 'Pupa',
    count: 0
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value});
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <>
        <h1>Classes component</h1>
        <h2>Name: {this.state.name}</h2>
        <input type="text" onChange={this.handleChange}/>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Add count</button>
      </>
    )
  }
}
