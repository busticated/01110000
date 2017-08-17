import React, { createFactory } from 'react';
import createClass from 'create-react-class';
import Logo from './svg/particle-logo.js';
import Layout from './ui/layout.js';

const { div, a } = React.DOM;
const layout = createFactory(Layout);
const logo = createFactory(Logo);


export default createClass({
    displayName: 'HomeView',
    className: 'home',
    render(){
        const className = this.className;

        return layout({ className },
            div({ className: `${className}-logo` },
                logo()
            ),
            a({ className: `${className}-libs-btn`, href: '/libs' },
                'view libraries'
            )
        );
    }
});
