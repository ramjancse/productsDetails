import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    console.log('mouted from about us page');
  }
  componentWillUnmount() {
    console.log("unpunted from about us page");
  }
  render() {
      return <div>
        This is about us page
    </div>;
  }
}
