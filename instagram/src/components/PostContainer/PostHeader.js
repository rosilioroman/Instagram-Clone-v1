import React from 'react';
import './PostContainer.css';

const PostHeader = (props) => {
    return (
    <div className="post-header">
        <div className="thumbnail-container">
            <img 
                src={props.thumbnail} 
                alt="user thumbnail" 
                className="user-thumbnail"
            />
        </div>
        <div className="username-display">
            {props.username}
        </div>
    </div>
    );
}

export default PostHeader;