import PropType from 'prop-types';
import React from 'react';

function CreateComment(props) {
  const { comment } = props;
  return (
    comment.id && (
      <div>
        <p>{comment}</p>
      </div>
    )
  );
}

CreateComment.propTypes = {
  comment: PropType.array.isRequired
};

export default CreateComment;
