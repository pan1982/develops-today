import Axios from 'axios';
import getMessageObject from '../actionCreator';
import { GET_POSTS, GET_POST_BY_ID } from './messages';

const url = 'https://simple-blog-api.crew.red';

const getPosts = (dispatch) => {
  Axios.get(`${url}/posts`)
    .then(response => dispatch(getMessageObject(
      GET_POSTS,
      response.data,
    )));
};

const getPostById = (postId, dispatch) => {
  Axios.get(`${url}/posts/${postId}?_embed=comments`)
    .then(response => dispatch(getMessageObject(
      GET_POST_BY_ID,
      response.data,
    )));
};

const commands = {
  getPosts: () => (dispatch) => {
    getPosts(dispatch);
  },
  getPostById: postId => (dispatch) => {
    getPostById(postId, dispatch);
  },
  editPost: post => (dispatch) => {
    Axios.put(`${url}/posts/${post.postId}`, { ...post })
      .then(response => dispatch(getMessageObject(
        GET_POST_BY_ID,
        response.data,
      )));
  },

  createPost: post => (dispatch) => {
    Axios.post(`${url}/posts`, { ...post })
      .then(() => () => getPosts(dispatch));
  },

  deletePost: postId => (dispatch) => {
    Axios.delete(`${url}/posts/${postId}`)
      .then(() => getPosts(dispatch));
  },

  createComment: (postId, body) => (dispatch) => {
    Axios.post(`${url}/comments`, { postId, body })
      .then(() => getPostById(postId, dispatch));
  },

};

export default commands;
