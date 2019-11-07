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
  state = {
    mainStore: this.props.mainStore
  };

  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    console.log('app1-->', this.props.mainStore);

    return (
      <Provider appStore={this.props.mainStore}>
        <div>
          This is App1 {this.props.mainStore.count}
          <button onClick={this.change}>app1 测</button>
          <Router>
            <Switch>
              <Route
                exact
                path="/app1/detail"
                render={() => {
                  return <Detail />;
                }}
              />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }

  change = () => {
    const { count } = this.props.mainStore;
    this.props.globalEventDistributor.changeMainState({
      count: count + 1
    });
  };
}
