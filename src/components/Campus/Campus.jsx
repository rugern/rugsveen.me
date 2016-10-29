import React from 'react';
import { Router, Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Alle presentasjoner</h1>
                <Link to={'/campus/flow'}>Flow</Link>
            </div>
        );
    },
});

export default App;
