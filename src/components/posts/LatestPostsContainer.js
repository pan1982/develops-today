import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LatestPosts from './LatestPosts';
import commands from '../../actions/posts/commands';

function LatestPostsContainer(props) {
  const { getPosts, posts, createPost } = props;

  useEffect(() => {
    getPosts();
  },
  []);

  const newPost = (post) => {
    createPost(post);
  };

  return (
    posts.length > 0 && <LatestPosts posts={posts} createPost={newPost} />
  );
}

LatestPostsContainer.propTypes = {
  getPosts: PropType.func.isRequired,
  posts: PropType.array.isRequired,
};

const mapState = (state) => {
  const { posts } = state;
  return { posts };
};

const mapDispatch = dispatch => ({
  getPosts: () => { dispatch(commands.getPosts()); },
});

export default connect(mapState, mapDispatch)(LatestPostsContainer);
