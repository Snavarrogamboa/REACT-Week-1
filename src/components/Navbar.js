//Navbar component

import React from 'react';


let e = React.createElement;

// made the easist Navbar from bootstrap
//Its dificult to write HTML using reat.createElement

export default class Navbar extends React.Component {
    render() {
        return e('nav',
            {class: 'navbar navbar-light bg-light'},
            e('a',
            {class: 'navbar-brand'},
            'Navarro Co')
        );
    }
}
