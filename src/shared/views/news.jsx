/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Posts from './posts';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _activePost: -1,
    };
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  };

  handleClickCallback = (i) => {
    console.log(i);
    this.setState({ _activePost: i });
  };

  render() {
    const {
      posts,
      isFetching,
      lastUpdated,
    } = this.props.receivePosts;
    const { _activePost } = this.state;
    return (
      <div>
        <p>
          {lastUpdated && (
            <span>
              Last updated at{' '}
              {new Date(lastUpdated).toLocaleTimeString()}.
            </span>
          )}
        </p>
        {posts && isFetching && posts.length === 0 && (
          <h2>Loading...</h2>
        )}
        {posts && !isFetching && posts.length === 0 && (
          <h2>Empty.</h2>
        )}
        {posts && posts.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts
              posts={posts}
              activePost={_activePost}
              onClickHandler={(i) => this.handleClickCallback(i)}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  receivePosts: {
    posts: 'posts' in state ? state.posts : [],
    isFetching:
      'isFetching' in state ? state.isFetching : true,
    lastUpdated:
      'lastUpdated' in state ? state.lastUpdated : null,
  },
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsIfNeeded,
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(News);
