import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App.jsx';
import Test from './components/Test.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/test' component={Test} />
    </Router>,
    document.getElementById('content')
);
