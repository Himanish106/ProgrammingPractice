import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// c074793f71924ad5a65b35b29eb675d6
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}
