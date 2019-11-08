import './style.less';
import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
// import store from './store';
import Layout from './layout';

@observer
export default class Main extends Component<any, any> {
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    console.log(this.props.mainStore);
    return (
      <Provider baseStore={this.props.mainStore}>
        <Layout />
        {/* <LocaleProvider locale={zh_CN}>
        </LocaleProvider> */}
      </Provider>
    );
  }
}
