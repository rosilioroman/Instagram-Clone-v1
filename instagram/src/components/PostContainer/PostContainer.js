import React from 'react';

//library for type checking our props
import PropTypes from 'prop-types';

//Custom component
import Post from './Post';

//Component stylesheet
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map( p => {
                return <Post key={p.imageUrl} post={p} />
            })}
        </div>
    );
} //Note that we are using the imageUrl property of each object to assign as a unique key

//check that 'posts' is an array of objects that match the specified shape
PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
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
    )
}

export default PostContainer;