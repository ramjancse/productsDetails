import React, { Component } from 'react';

export default class Home extends Component {
  state = {
    counter: 0,
  }
  componentDidMount() {
    console.log('mounted from home page');
  }
  componentWillUnmount() {
    console.log('unmounted frm home page');
  }
  componentDidUpdate() {
    console.log('counter updated');
  }

  clickHandle = () => {
    this.setState({counter: this.state.counter + 1})
  }
  render() {
      return <div>
        Counter : {this.state.counter}
        <div>
        <button onClick={ this.clickHandle}> Click </button>
        </div>
       
    </div>;
  }
}
