import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../src/store';

@observer
export default class Main extends Component<any, any> {
  render() {
    console.log('main-->', this.props.mainStore);
    return (
      <div id="content-wrap">
        This is Main
        {this.props.mainStore.count}
        <button onClick={this.change}>store测试</button>
        <div></div>
        <a style={{ marginLeft: 20 }} href="#/app1">
          to app1
        </a>
        <a style={{ marginLeft: 20 }} href="#/app1/detail">
          app1 detail
        </a>
        <a style={{ marginLeft: 20 }} href="#/app2">
          to app2
        </a>
        <div id="sub-module"></div>
      </div>
    );
  }

  change = () => {
    const { count } = this.props.mainStore;
    this.props.mainStore.changeMainState({
      count: count + 1
    });
  };
}
