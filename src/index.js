import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import Campus from './components/Campus/Campus.jsx';
import Flow from './components/Campus/Flow/Flow.jsx';
import CfP from './components/Campus/CfP/CfP.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/campus' component={Campus} />
        <Route path='/campus/flow' component={Flow} />
        <Route path='/campus/cfp' component={CfP} />
        <Route path='*' component={App} />
    </Router>,
    document.getElementById('content')
);
