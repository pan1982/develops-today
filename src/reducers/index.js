import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducer';
import postReducer from './posts/postReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export default rootReducer;
