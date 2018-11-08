import React, { Component } from 'react';
import './App.css';
import { Spin, Modal, Button, message } from 'antd';
import ListMovie from './components/list';

class App extends Component {
  state = {
    data: [],
    isShowModal: false,
    itemMovie: null
  };

  componentDidMount() {
    fetch('https://workshopup.herokuapp.com/movie')
      .then(response => response.json())
      .then(items => this.setState({ data: items.results }));
  }

  onItemMovieClick = item => {
    this.setState({ isShowModal: true, itemMovie: item });
  };

  handleModalCancel = e => {
    this.setState({ isShowModal: false });
  };

  handleBuyTicket = () => {
    this.setState({ isShowModal: false });
    message
      .loading('Buy Ticket Processing...', 1)
      .then(() => message.success('You buy ticket successfully'));
  };

  handleFavorite = () => {
    message.success('Add this movie to your favorite successfully', 1);
  };

  render() {
    const item = this.state.itemMovie;
    return (
      <div className="App">
        {this.state.data.length > 0 ? (
          <div style={{ margin: '16px' }}>
            {' '}
            <ListMovie
              items={this.state.data}
              onItemMovieClick={this.onItemMovieClick}
            />
          </div>
        ) : (
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Spin size="large" />
          </div>
        )}
        {this.state.itemMovie != null ? (
          <Modal
            width="40%"
            style={{ maxHeight: '70%' }}
            title={this.state.itemMovie.title}
            visible={this.state.isShowModal}
            onCancel={this.handleModalCancel}
            footer={[
              <Button
                key="submit"
                type="primary"
                icon="heart"
                size="large"
                shape="circle"
                onClick={this.handleFavorite}
              />,
              <Button
                key="submit"
                type="primary"
                icon="shopping-cart"
                size="large"
                shape="circle"
                onClick={this.handleBuyTicket}
              />
            ]}
          >
            <img src={item.image_url} style={{ width: '100%' }} />
            <br />
            <br />
            <p>{item.overview}</p>
          </Modal>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
