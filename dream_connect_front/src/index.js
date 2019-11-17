import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //Css styles
import '/assets/css/styles.css';
// Apps imported for routes
import  {BrowserRouter as Router, Route } from "react-router-dom"; // Routing
//import {BrowserRouter} from 'react-router-dom';
//import 'semantic-ui-css/semantic.min.css' //library that helps in creation of form components
import App from './App';
import TheHub from './assets/Components/TheHub';
import YourHub from './assets/Components/YourHub';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <Router>
        <Route exact path="/" component={App} />
        //<Route exact path="/TheHub" component={TheHub} />
        //<Route exact path="/ub" component={YourHub} />

    </Router>

,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
