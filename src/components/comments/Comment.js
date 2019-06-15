import PropType from 'prop-types';
import React from 'react';

function Comment(props) {
  const { comment } = props;
  return (
    comment.id
    && (
    <div style={{
      padding: '5px',
      borderRadius: '10px',
      backgroundColor: 'white',
      margin: '10px 0',
    }}
    >
      <p
        style={{
          margin: '5px 0',
        }}
      >
        {comment.body}
      </p>
    </div>
    )
  );
}

Comment.propTypes = {
  comment: PropType.object.isRequired,
};

export default Comment;
