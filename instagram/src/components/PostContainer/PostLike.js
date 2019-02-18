import React from 'react';

//Image files
import RedHeart from '../../photos/red-heart-icon.svg';
import Heart from '../../photos/white-heart-icon.svg';
import CommentIcon from '../../photos/comment-bubble.png';

//Component stylesheet
import './PostContainer.css';

const PostLike = props => {
    if(props.isLiked) {
        return (
        <div className="likes-container">
            <div className="post-icons-container">
                <div className="post-icons">
                    <img 
                        src={ RedHeart }
                        alt="heart icon"
                        className="icon"
                        onClick={() => props.likeHandler()}
                    />
                </div>
                <div className="post-icons">
                    <img 
                        src={ CommentIcon }
                        alt="comment icon"
                        className= "icon"
                    />
                </div>
            </div>
            <div className="num-of-likes">
                {props.post.likes} likes
            </div>
            </div>
        );
    } else {
        return (
            <div className="likes-container">
            <div className="post-icons-container">
                <div className="post-icons">
                    <img 
                        src={ Heart }
                        alt="heart icon"
                        className="icon"
                        onClick={() => props.likeHandler()}
                    />
                </div>
                <div className="post-icons">
                    <img 
                        src={ CommentIcon }
                        alt="comment icon"
                        className= "icon"
                    />
                </div>
            </div>
            <div className="num-of-likes">
                {props.post.likes} likes
            </div>
            </div>
        );
    }
}

export default PostLike;