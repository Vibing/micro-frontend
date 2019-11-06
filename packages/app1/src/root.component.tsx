import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

const Detail = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "detail"*/ './detail')
});
const List = loadable({
  loading: () => <div></div>,
  loader: () => import(/* webpackChunkName: "list"*/ './list')
});

export default class App1 extends Component {
  render() {
    return (
      <div>
        This is App1
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
    );
  }
}
