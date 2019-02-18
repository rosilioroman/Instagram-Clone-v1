import React from 'react';

const authenticate = App => Login => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userLoggedIn: false
      }
    }

    //when the component mounts, check if localStorage has a username key/value
    //set the value of userLoggedIn to the value of the key 'username' found in localStorage
    componentDidMount() {
      if(localStorage.getItem('username')){
        this.setState({ userLoggedIn: true });
      }
    }

    //Conditional Render: by default render <Login />, if userLoggedIn evaluates to 'true' render <App />
    render() {
      if(this.state.userLoggedIn) {
        return <App />
      }

      return <Login />
    }
  }
)

export default authenticate;