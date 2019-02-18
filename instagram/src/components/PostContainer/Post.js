import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import PostLike from './PostLike';

//Stylesheet
import './PostContainer.css';

class Post extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentPost: props.post,
            isLiked: false
        }
    }

    //likeHandler: create a variable called tempPost and set it equal to the currentPost found in state.
    //create a second variable called currentLikedStatus to track the current boolean value of isLiked found in state.
    //If currentLikedStatus is false, increment the number of likes on tempPost by 1.
    //If currentLikedStatus is true, decrement the number of likes on tempPost by 1.
    //Finally, update the state to match tempPost and currentLikedStatus.
    likeHandler = () => {
        let tempPost = this.state.currentPost;
        let currentLikedStatus = this.state.isLiked;
        if(currentLikedStatus === false) {
            tempPost.likes++;
            currentLikedStatus = !currentLikedStatus;
        } else {
            tempPost.likes--;
            currentLikedStatus = !currentLikedStatus;
         }
        this.setState({ 
            currentPost: tempPost,
            isLiked: currentLikedStatus
        });
    }

    render() {
        return (
            <div className="standalone-post">
                <PostHeader 
                    username={this.state.currentPost.username}
                    thumbnail={this.state.currentPost.thumbnailUrl}
                />
                <div className="post-image-container">
                    <img 
                        src={this.state.currentPost.imageUrl} 
                        alt="posted by user" 
                        className="post-image" 
                    />
                </div>
                <PostLike isLiked={this.state.isLiked} likeHandler={this.likeHandler} post={this.state.currentPost}/>
                <CommentSection comments={this.state.currentPost.comments}/>
            </div>
        );
    }
}

//check that the prop being passed down (post) matches the specified shape 
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
            })
        )
    })
}

export default Post;