import React from 'react';
import {
    HashRouter, Switch, Route
} from 'react-router-dom'
import Photos from './components/Photos';
import About from './components/About';
import Login from './components/Login';
import NavBar from './components/NavBar';
import './App.css';

const App = (props) => {
    const {computedMatch} = props;
    return (
        <HashRouter>
            <div>
                <NavBar />
                <Switch>
                    <div className="container">
                        <Route exact path="/" component={Photos} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about" component={About} />
                    </div>
                </Switch>
            </div>
         </HashRouter>
      
    );
  };

export default App;