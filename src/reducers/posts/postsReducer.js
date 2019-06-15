import { GET_POSTS } from '../../actions/posts/messages';


const initialState = [];

const postsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default: return previousState;
  }
};

export default postsReducer;
