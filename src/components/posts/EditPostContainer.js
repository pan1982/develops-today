import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import commands from '../../actions/posts/commands';
import EditPost from './EditPost';

function EditPostContainer(props) {
  const { post, editPost, createPost, getPostById, match } = props;

  const [edited, setEdited] = useState(false);
  const [created, setCreated] = useState(false);

  const { params } = match;
  useEffect(() => {
    getPostById(params.postId);
  }, []);

  const updatePost = value => {
    editPost(value);
    setEdited(!edited);
  };

  const newPost = value => {
    createPost(value);
    setCreated(!created);
  };

  return edited || created ? (
    <Redirect to={created ? '/latest-posts' : `/post/${post.id}`} />
  ) : (
    <EditPost post={!params.postId ? undefined : post} editPost={!params.postId ? newPost : updatePost} />
  );
}

EditPostContainer.propTypes = {
  getPostById: PropType.func.isRequired,
  post: PropType.object.isRequired,
  match: PropType.object.isRequired,
  editPost: PropType.func.isRequired,
  createPost: PropType.func.isRequired
};

const mapState = state => {
  const { post } = state;
  return { post };
};

const mapDispatch = dispatch => ({
  getPostById: () => {
    dispatch(commands.getPosts());
  },
  editPost: post => {
    dispatch(commands.editPost(post));
  },
  createPost: post => {
    dispatch(commands.createPost(post));
  }
});

export default connect(
  mapState,
  mapDispatch
)(EditPostContainer);
