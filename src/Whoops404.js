import React from 'react';
import { useLocation } from 'react-router';

function Whoops404() {
    const loc = useLocation();
    return (
        <div>
            <h1>Resource not found {loc.pathname}</h1>
        </div>
    );
}

export default Whoops404;