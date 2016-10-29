import React from 'react';
import { Router, Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Velkommen!</h1>
                <Link to={'/campus'}>Presentasjoner</Link>
            </div>
        );
    },
});

export default App;
