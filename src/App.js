import React, { Component } from 'react';
// import About from './components/About';
// import Home from './components/Home';
import Products from './components/Products';
// import Service from './components/Service';


export default class App extends Component {
  state = {
    page : 'home'
  }

  click = (pageName) => {
    this.setState({page : pageName})
  }
  
  render() {
    return <div>
      {/* <button onClick={() => this.click('home') }> Home </button>
      <button onClick={() => this.click('about')}> About </button>
      { this.state.page === 'home'? <Home/> : <About/>} */}

      <Products />
    </div>;
  }
}
