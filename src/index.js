import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App.jsx';
import Campus from './components/Campus/Campus.jsx';
import Flow from './components/Campus/Flow/Flow.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/campus' component={Campus} />
        <Route path='/campus/flow' component={Flow} />
    </Router>,
    document.getElementById('content')
);
