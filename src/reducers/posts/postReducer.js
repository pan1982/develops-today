import { GET_POST_BY_ID } from '../../actions/posts/messages';


const initialState = {};

const postReducer = (previousState = initialState, action) => {
  const newState = { ...previousState, ...action.payload };
  switch (action.type) {
    case GET_POST_BY_ID:
      return newState;
    default: return previousState;
  }
};

export default postReducer;
