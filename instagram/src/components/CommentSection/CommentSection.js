import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import Comment from './Comment';
import AddComment from './AddComment';

//Stylesheet
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('username'),
            comments: props.comments,
            commentInput: ""
        }
    }

    //change the property on state that matches the event target's 'name' to match the event target's value
    commentInputHandler = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    //submitComment:
    //e.preventDefault() stops the form from reloading the entire page.
    //Step 1: if the input field is NOT empty, continue.
    //Step 2: create const newComment as an object that holds two properties: username and text.
    //Step 3: username is by default set to 'rosilio' and text is set to the current value of commentInput from state.
    //Step 4: create a currentComments variable that holds the current array of Comment objects.
    //Step 5: push the newComment onto the currentComments array
    //Step 6: update the state to reflect the changes, reset the commentInput to an empty string
    submitComment = e => {
        e.preventDefault();
        if(this.state.commentInput !== "") {
            const newComment = {
                username: this.state.user,
                text: this.state.commentInput
            }
            let currentComments = this.state.comments;
            currentComments.push(newComment);
            this.setState({
                comments: currentComments,
                commentInput: ""
            });
        }
    }

    //Note: using the index value from the .map() method to create a unique key for each instance of the Comment component.
    //This practice is not encouraged by the developers at reactjs.org
    render() {
        return (
            <div className="comment-section-container">
                {this.state.comments.map((commentObj, index) => <Comment comment={commentObj} key={index} /> )}
                <AddComment 
                    commentsList={this.state.comments} 
                    commentInput={this.commentInputHandler}
                    submitComment={this.submitComment}
                    value={this.state.commentInput}
                />
            </div>
        );

    }
}

//Check that 'comments' (the prop being passed down from Post.js) is an array of objects with the specified shape
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}

export default CommentSection;