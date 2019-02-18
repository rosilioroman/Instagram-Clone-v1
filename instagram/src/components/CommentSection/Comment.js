import React from 'react';

//This component simply displays the username and text properties of a comment object
const Comment = props => {
    return (
        <div className="standalone-comment">
            <div className="username-display comment-username">{props.comment.username}</div>
            <div className="comment-text">{props.comment.text}</div>
        </div>
    );
}

export default Comment;