import React, { Component } from 'react';
import moment from 'moment';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <h3>Testing...</h3>
        <div>
          {moment().format('MMMM Do YYYY')}
        </div>

      </div>
    );
  }
}
