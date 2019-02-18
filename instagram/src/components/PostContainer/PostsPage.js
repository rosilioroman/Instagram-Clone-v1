import React from 'react';

//Components
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

//Stylesheet
import './PostContainer.css';

const PostsPage = props => {
    return (
        <div className="posts-page">
            <SearchBar logout={props.logout} searchInputHandler={props.searchInputHandler} searchText={props.searchText}/>
            <PostContainer posts={props.posts}/>
        </div>
    );
}

export default PostsPage;