import React, { Component } from 'react';
import { Card } from 'antd';
import Truncate from 'react-truncate';

const { Meta } = Card;

class ItemMovie extends Component {
  render() {
    const item = this.props.item;
    return (
      <Card
        onClick={() => {
          this.props.onItemMovieClick(item);
        }}
        hoverable
        style={{ width: 454 }}
        cover={<img src={item.image_url} />}
      >
        <Meta
          title={item.title}
          description={
            <div>
              <Truncate width="340" lines={2} ellipsis={<span>...</span>}>
                {item.overview}
              </Truncate>
            </div>
          }
        />
      </Card>
    );
  }
}

export default ItemMovie;
