import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div>
            Hello World!
        </div>
    )
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Hello/>, app);