import React, { Component } from 'react';

export default class Detail extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return <div>这是APP1详情页</div>;
  }
}
