import React, { Component } from 'react';
import { List } from 'antd';
import ItemMovie from './item';

class ListMovie extends Component {
  render() {
    return (
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.props.items}
        renderItem={item => (
          <List.Item>
            <ItemMovie
              item={item}
              onItemMovieClick={this.props.onItemMovieClick}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default ListMovie;
