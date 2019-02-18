import React, { Component } from 'react';
import dummyData from './dummy-data';
import Fuse from 'fuse.js';

//Components
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import authenticate from './components/authentication/authenticate';

//Stylesheet
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ""
    }
  }

  //set state from componentDidMount()
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  //this function clears the data in localStorage, effectively logging out the user
  logout = () => {
    alert("You've logged out!");
    localStorage.clear();
    window.location.reload(); //reload the page
  }

  //searchInputHandler:
  //change the value of the searchText property on state
  //call the search method every time the onChange event is triggered
  searchInputHandler = e => {
    this.setState(
      { searchText: e.target.value },
      () => this.search(this.state.searchText)
    );
  }

  //Search logic using the Fuse.js library for fuzzy search
  search = searchText => {
    if(searchText.length > 0) {
      var options = {
        tokenize: true,
        findAllMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 1000,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "username",
          "comments.username",
          "comments.text"
        ]
      };
      var fuse = new Fuse(this.state.data, options);
      var result = fuse.search(searchText);
      this.setState({ data: result })
    }

    if(searchText.length === 0) {
      this.setState({ data: dummyData });
    }
  }

  render() {
    console.log()
    return (
      <div className="App">
        <PostsPage 
          posts={this.state.data} 
          logout={this.logout} 
          searchInputHandler={this.searchInputHandler}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default authenticate(App)(LoginPage);