import React from 'react';
import {Router, Link} from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Mitt navn er Christine</h1>
                <Link to={'/test'}>Presentasjoner</Link>
            </div>
        );
    }
});

export default App;
