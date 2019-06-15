import PropType from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comment';

const commentsStyle = {
  padding: ' 10px 20px',
  backgroundColor: 'lightgrey',
  borderRadius: '20px'
};

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: 'lightGrey',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '14px',
  border: '0px',
  padding: '10px',
  cursor: 'pointer',
  margin: '5px'
};

function Post(props) {
  const { deletePost, createComment, post } = props;

  const [create, setCreate] = useState(false);
  const [body, setBody] = useState('');

  const { comments } = post;

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: 'auto'
      }}
    >
      <div className="post-section">
        <div>
          <button
            type="button"
            onClick={() => deletePost(post.id)}
            style={buttonStyle}
          >
            Delete post
          </button>
          <Link
            to={`/edit/${post.id}`}
            style={{
              ...buttonStyle,
              backgroundColor: 'lightGrey',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Edit post
          </Link>
        </div>
        <div
          style={{
            border: '2px solid lightGrey',
            margin: '20px 0',
            borderRadius: '25px',
            padding: '0 20px'
          }}
        >
          <p
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              margin: '10px 0'
            }}
          >
            {post.title}
          </p>
          <hr />
          <p
            style={{
              fontSize: '18px',
              margin: '10px 0'
            }}
          >
            {post.body}
          </p>
        </div>
      </div>
      <div style={commentsStyle}>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginTop: '0px'
          }}
        >
          Comments:
        </p>
        <button
          hidden={create}
          type="button"
          onClick={() => setCreate(!create)}
        >
          Add comment
        </button>
        {create && (
          <div>
            <form
              onSubmit={() => {
                createComment(post.id, body);
                setCreate(!create);
                setBody('');
              }}
            >
              <label htmlFor="comment">
                New comment:
                <br />
                <textarea
                  style={{
                    width: '700px',
                    borderRadius: '10px'
                  }}
                  id="comment"
                  rows={3}
                  value={body}
                  onChange={e => setBody(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setCreate(!create)}>
                Cancel
              </button>
            </form>
          </div>
        )}
        {comments &&
          comments.map(comment => (
            <Comments comment={comment} key={comment.id} />
          ))}
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropType.object.isRequired,
  deletePost: PropType.func.isRequired,
  createComment: PropType.func.isRequired
};

export default Post;
