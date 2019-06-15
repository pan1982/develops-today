import PropType from 'prop-types';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: 'green',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '14px',
  border: '0px',
  padding: '10px',
  cursor: 'pointer',
  margin: '5px',
};


function LatestPosts(props) {
  const { posts } = props;

  return (

    <div
      style={{
        maxWidth: '800px',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Link
        to="/create-post"
        style={{
          ...buttonStyle,
          position: 'fixed',
          top: '20px',
          left: '20%',
          textDecoration: 'none',
        }}
      >Create post
      </Link>
      {posts.map(post => (
        <div
          key={post.id}
          style={{
            padding: '15px',
            borderColor: 'lightGrey',
            borderBottomStyle: 'solid',
            borderWidth: '1px',
            margin: '10px 0',
          }}
        >
          <Link
            to={`post/${post.id}`}
            style={{
              textDecoration: 'none',
              fontSize: '25px',
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            {post.title}
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

LatestPosts.propTypes = {
  posts: PropType.array.isRequired,
};

export default LatestPosts;
