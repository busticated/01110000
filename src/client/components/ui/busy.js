import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const { p } = React.DOM;


export default createClass({
    displayName: 'BusyIndicator',
    propTypes: {
        className: PropTypes.string.isRequired
    },
    render(props){
        const { className } = props;

        return p({
            className: `${className}-busy`,
            children: 'LOADING...'
        });
    }
});

