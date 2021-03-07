//Login Form


import React from 'react';

//Could not figure out how to create a react element with all these html properties
//gave up and just returned HTML
//Border for Login Form is in the app.css
//couldnt figure out how to inline style with JSX

export default class LogInForm extends React.Component {
    render() {
        return <div className="body">
        <h3>Log in</h3>
        <div class="info">
            <input type="text" placeholder="User Name" name="userName" />
            <br />
            <input type="text" placeholder="Password" name="password" />
            <br/>
            <button>Log in</button>
        </div>
        </div>
        
    };
}
