import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConditionalView from './App';

//React will render the result of authenticate(App)(LoginPage), wchich is an anonymous class that conditionally renders either App or LoginPage
ReactDOM.render(<ConditionalView />, document.getElementById('root'));