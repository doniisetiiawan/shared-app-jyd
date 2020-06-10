import { RECEIVE_POSTS } from '../actions';

const receivePosts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts,
        lastUpdated: action.lastUpdated,
      };
    default:
      return state;
  }
};

export default receivePosts;
