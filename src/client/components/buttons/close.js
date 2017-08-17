import React, { createFactory } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import X from '../svg/x.js';

const { a, span } = React.DOM;
const x = createFactory(X);


export default createClass({
    displayName: 'CloseButton',
    propTypes: {
        className: PropTypes.string,
        onClick: PropTypes.func.isRequired
    },
    getDefaultProps(){
        return { className: 'btn-close' };
    },
    render(props){
        const { className, onClick } = props;

        return a({ className, onClick },
            span(null, x())
        );
    }
});
