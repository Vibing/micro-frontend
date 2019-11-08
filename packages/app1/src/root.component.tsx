import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import { observer, Provider } from 'mobx-react';
import CustomEvent from 'custom-event';

const Detail = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "detail"*/ './detail')
});
const List = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "list"*/ './list')
});

@observer
export default class App1 extends Component<any, any> {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <Provider baseStore={this.props.mainStore}>
        <Router>
          <Switch>
            <Route exact path="/app1" render={() => <List />} />
            <Route exact path="/app1/detail" render={() => <Detail />} />
          </Switch>
        </Router>
      </Provider>
    );
  }

  change = () => {
    const { count } = this.props.mainStore;
    this.props.mainStore.changeState({
      count: count + 1
    });
  };
}
