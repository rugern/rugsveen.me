import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Alle presentasjoner</h1>
                <Link to={'/campus/flow'}>Flow</Link>
                <Link to={'/campus/cfp'}>CfP</Link>
            </div>
        );
    },
});

export default App;
