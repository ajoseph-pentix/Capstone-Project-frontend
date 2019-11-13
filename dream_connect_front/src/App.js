import React, {Component} from 'react';
import Header from "./Components/navigation/Header" // Header
//import './App.css';
import {Route} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";

export default class App extends Component {

  render() {

    return (
            <div>
              <Header />
              </div>
            )
        }
    }



// const App = () => (
//   <div className="ui container"> //to add margins to page
//     <Route path="/" exact component={HomePage} />
//     <Route path="/login" exact component={LoginPage} />
//     </div>
//   );
//
// export default App;
