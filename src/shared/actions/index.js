import { fetchPostsAsync } from '../api/fetch-posts';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  posts: json,
  lastUpdated: Date.now(),
});

// eslint-disable-next-line max-len
export const fetchPosts = () => (dispatch) => fetchPostsAsync((json) => dispatch(receivePosts(json)));

export const fetchPostsIfNeeded = () => (
  dispatch,
  getState,
) => {
  if (
    getState().receivePosts
    && getState().receivePosts.length
  ) {
    const json = getState().receivePosts.posts;
    return dispatch(receivePosts(json));
  }
  return dispatch(fetchPosts());
};
