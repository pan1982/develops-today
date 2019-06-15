
import PropType from 'prop-types';
import React, { useState } from 'react';

function EditPost(props) {
  const {
    editPost,
    post,
  } = props;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  return (
    <div style={{
      maxWidth: '800px',
      margin: 'auto',
    }}
    >
      <div
        className="post"
      >
        <form
          onSubmit={() => editPost({
            postId: post.id,
            title,
            body,
          })}
          style={{
            width: '100%',
          }}
        >
          <label
            htmlFor="title"
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
            }}

          >
          Title:<br />
            <input
              type="text"
              value={title}
              id="title"
              onChange={e => setTitle(e.target.value)}
              style={{
                marginBottom: '10px',
                padding: '10px',
                width: '100%',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            />

          </label>
          <br />
          <label
            htmlFor="body"
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          >
              Body:<br />
            <textarea
              value={body}
              id="body"
              rows={3}
              onChange={e => setBody(e.target.value)}
              style={{
                marginBottom: '10px',
                padding: '10px',
                width: '100%',
                borderRadius: '10px',
                fontSize: '16px',
              }}
            />

          </label>
          <br />
          <button
            type="submit"
          >
              Save
          </button>
        </form>
      </div>

    </div>
  );
}

EditPost.propTypes = {
  post: PropType.object,
  editPost: PropType.func.isRequired,
};

EditPost.defaultProps = {
  post: {
    title: '',
    body: '',
    id: '',
  },
};

export default EditPost;
