import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div id="content-wrap">
        This is Main <a href="#/app1">to app1</a>
        <a href="#/app1/detail">app1 detail</a>
        <a href="#/app2">to app2</a>
        <div id="sub-module"></div>
      </div>
    );
  }
}
