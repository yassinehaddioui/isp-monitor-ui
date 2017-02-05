import 'core-js/fn/object/assign';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import Home from './components/home/Home';

let application = (
    <Router history={browserHistory}>
        <Route path="/" component={ Home }/>
    </Router>  );

ReactDOM.render(application
    ,document.getElementById('app'));
