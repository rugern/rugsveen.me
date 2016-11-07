import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={'/'}>Hjem</Link></li>
                    <li><Link to={'/campus'}>Presentasjoner</Link></li>
                </ul>
            </div>
        );
    },
});

export default App;
