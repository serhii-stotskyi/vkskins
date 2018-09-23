import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Example extends Component {
    render() {
        return (
            <div>
                <h3>Hello from React</h3>
            </div>
        );
    }
}

export default Example;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}