import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class peopleList extends Component {
  render() {
    return (
      <div>
        这是APP1<Link to="/app1/detail">详情</Link>
      </div>
    );
  }
}
