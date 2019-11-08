import './style.less';
import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Main extends Component<any, any> {
  render() {
    return (
      <div id="content-wrap">
        Main App
        <div>
          <button onClick={this.change}>
            Store测试 count:{this.props.mainStore.count}
          </button>
        </div>
        <div></div>
        <a style={{ marginLeft: 20 }} href="#/app1">
          app1
        </a>
        <a style={{ marginLeft: 20 }} href="#/app1/detail">
          app1/detail
        </a>
        <a style={{ marginLeft: 20 }} href="#/app2">
          app2
        </a>
        <a style={{ marginLeft: 20 }} href="#/app2/detail">
          app2/detail
        </a>
        <div id="sub-module-wrap"></div>
      </div>
    );
  }

  change = () => {
    const { count } = this.props.mainStore;
    this.props.mainStore.changeState({
      count: count + 1
    });
  };
}
