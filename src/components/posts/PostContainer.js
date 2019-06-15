import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Post from './Post';
import commands from '../../actions/posts/commands';

function PostContainer(props) {
  const { getPostById, deletePost, createComment, post, match } = props;

  const { params } = match;
  const [redirectToPosts, setRedirectToPosts] = useState(false);

  useEffect(() => {
    getPostById(params.postId);
  }, []);

  const delPost = vaue => {
    deletePost(vaue);
    setRedirectToPosts(true);
  };

  return !redirectToPosts ? (
    !!post.id && (
      <Post
        post={post}
        deletePost={delPost}
        createComment={createComment}
        match={match}
      />
    )
  ) : (
    <Redirect to="/" />
  );
}

PostContainer.propTypes = {
  getPostById: PropType.func.isRequired,
  post: PropType.object.isRequired,
  deletePost: PropType.func.isRequired,
  createComment: PropType.func.isRequired,
  match: PropType.object.isRequired
};

const mapState = state => {
  const { post } = state;
  return { post };
};

const mapDispatch = dispatch => ({
  getPostById: postId => {
    dispatch(commands.getPostById(postId));
  },
  deletePost: postId => {
    dispatch(commands.deletePost(postId));
  },
  createComment: (postId, body) => {
    dispatch(commands.createComment(postId, body));
  }
});

export default connect(
  mapState,
  mapDispatch
)(PostContainer);
