import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Componet/index'
import { connect } from "react-redux"
import { nameAction } from "./store/action/action";

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: ""
    }
  }
  _onChange(event) {
    this.setState({ value: event.target.value })
  }
  _onClick() {
    this.props.name_Action(this.state.value)

  }

  render() {
    console.log(this.props.name_Action)
    return (
      <div className="App">
        <input value={this.state.value} onChange={this._onChange.bind(this)}></input>
        <button onClick={this._onClick.bind(this)}>ADD</button>
        <List />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return ({
    name: state.root,
  })
};

const mapDispatchToProp = (dispatch) => {
  return {
    name_Action: (data) => {
      dispatch(nameAction(data))
    },
  };
};
export default connect(null, mapDispatchToProp)(App)
