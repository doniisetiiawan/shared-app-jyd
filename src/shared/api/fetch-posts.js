/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-fetch';

export const fetchPostsAsync = (callback) => fetch(
  'https://reactjsblueprints-newsapi.herokuapp.com/stories',
)
  .then((response) => response.json())
  .then((data) => callback(data));
