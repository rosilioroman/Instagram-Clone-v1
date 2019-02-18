import React from 'react';

import './CommentSection.css';

const AddComment = props => {
    return (
        <form className="comment-input-container" onSubmit={props.submitComment}>
            <input 
                type="text"
                placeholder="Add a comment..." 
                className="add-comment-field" 
                name="commentInput" 
                onChange={props.commentInput}
                value={props.value}
            />
        </form>
    );
}

export default AddComment;