//HomePage 

import React from 'react';
import LogInForm from './LoginForm';
import Navbar from './Navbar';

let e = React.createElement;
//Making a container that has the Navbar and Login form

export default class HomePage extends React.Component {
    render() {
        return e('div',
            {class: 'container'},
            e(Navbar, {}, null),
            e(LogInForm, {}, null),
        );
    }
}
